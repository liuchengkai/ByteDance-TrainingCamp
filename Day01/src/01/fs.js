(async () => {
    const fs = require('fs')
    const {promisify} = require('util')
    const readFile = promisify(fs.readFile)
    const data = await readFile('./conf.js')
    console.log(data.toString())
})()