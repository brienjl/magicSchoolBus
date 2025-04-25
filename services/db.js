import fs from 'node:fs/promises'
import appSettings from '../config/appSettings'

const dbFolder = appSettings.educationPressReleasesFolder
const dbName   = appSettings.educationPressReleasesDB
const DB_PATH  = new URL(dbFolder + dbName)

export const getDB = async () => {
    const db = await fs.readFile(DB_PATH, 'urf-8')
    return JSON.parse(db)
}

export const writeDB = async (db) => {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
    return db
}

export const postDB = async (post) => {
    const db = await getDB()
    db.posts.push(post)
    await writeDB(db)
    return post
}