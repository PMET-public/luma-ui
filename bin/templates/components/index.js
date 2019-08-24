const source = require('common-tags').source

module.exports = Name => source`

    export * from './${Name}'
    export * from './${Name}.styled'
    export { ${Name} as default } from './${Name}'

` + '\n'
