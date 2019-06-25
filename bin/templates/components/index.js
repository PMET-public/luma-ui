const source = require('common-tags').source

module.exports = Name => source`

    export * from './${Name}'
    export { ${Name} as default } from './${Name}'

` + '\n'
