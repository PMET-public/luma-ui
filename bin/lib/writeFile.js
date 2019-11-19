const path = require('path')
const fs = require('fs')

module.exports = function writeFile(filePath, content) {
    const relativePath = path.relative('.', filePath)
    if ( fs.existsSync(filePath) ) {
        console.log(`💥 \x1b[31m${relativePath} \x1b[0malready exists`) 
    }
    else {
        fs.writeFileSync(filePath, content)
        console.log(`👌 \x1b[32m${relativePath} \x1b[0mcreated`) 
    }
}
