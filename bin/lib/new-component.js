const fs = require('fs')
const writeFile = require('./writeFile')

const templateComponent = require('../templates/components/Component')
const templateStyles = require('../templates/components/Component.styled')
const templateStory = require('../templates/components/Component.story')
const templateIndex = require('../templates/components/index')

module.exports = (name, folder = 'components') => {
    if (!/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(name)) {
        console.error(`⚠️  \x1b[4m${name} \x1b[0mis not a valid component name. Try naming your component with pascal case. i.e. \x1b[4mNewComponent\x1b[0m`)
        return null
    }

    // const hyphenatedName = name.replace(/([A-Z])/g, g => '-' + g.toLowerCase()).replace(/^-/, '')
    const dir = `${__dirname}/../../src/${folder}/${name}`

    // Create new directory
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)

    // Write files
    writeFile(`${dir}/${name}.tsx`, templateComponent(name))
    writeFile(`${dir}/${name}.styled.tsx`, templateStyles(name))
    writeFile(`${dir}/${name}.story.tsx`, templateStory(name, folder))
    writeFile(`${dir}/index.ts`, templateIndex(name))
}
