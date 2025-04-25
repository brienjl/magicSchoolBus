import fs from 'fs'
import path from 'path'

const configPath = path.resolve('./config/appSettings.json')
const data = fs.readFileSync(configPath)

// Set Applicaiton Settings
const appSettings = JSON.parse(data)
export default appSettings

// Set Application Date
const getToday = () => {
    return new Date().toLocaleDateString('en-CA', { timeZone: appSettings.timezone} )
}
export const today = getToday()
//export const today = '2025-03-28'