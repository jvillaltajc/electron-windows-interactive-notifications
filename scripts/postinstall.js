const path = require('path')
const fs = require('fs')

const releaseKey = 'Release'
const from = path.join(__dirname, '..', releaseKey, 'InteractiveNotifications.dll')
const to = path.join(__dirname, '..', 'build', 'Release', 'InteractiveNotifications.dll')

fs.createReadStream(from).pipe(fs.createWriteStream(to))
