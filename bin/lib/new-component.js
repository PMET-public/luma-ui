#! /usr/bin/env node
const fs = require('fs')
const path = require('path')
const templateComponent = require('../templates/components/Component')
const templateStory = require('../templates/components/Component.story')
const templateIndex = require('../templates/components/index')

module.exports = (name) => {
    if (! /^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(name) ) {
        console.error(`⚠️  \x1b[4m${name} \x1b[0mis not a valid component name. Try naming your component with pascal case. i.e. \x1b[4mNewComponent\x1b[0m`)
        return null
    } 

    const hyphenatedName = name.replace(/([A-Z])/g, g => '-' + g.toLowerCase()).replace(/^-/, '')
    const dir = `${__dirname}/../../src/components/${name}`

    // Create new directory
    if ( !fs.existsSync(dir) ) fs.mkdirSync(dir)

    // Write files
    writeFile(`${dir}/${name}.tsx`, templateComponent(name, hyphenatedName))
    writeFile(`${dir}/${name}.story.tsx`, templateStory(name))
    writeFile(`${dir}/index.ts`, templateIndex(name))
}

function writeFile(filePath, content) {
    const relativePath = path.relative('.', filePath)
    if ( fs.existsSync(filePath) ) {
        console.log(`💥 \x1b[31m${relativePath} \x1b[0malready exists`) 
    }
    else {
        fs.writeFileSync(filePath, content)
        console.log(`👌 \x1b[32m${relativePath} \x1b[0mcreated`) 
    }
}
