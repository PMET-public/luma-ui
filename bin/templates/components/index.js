const source = require('common-tags').source

module.exports = Name => source`

    import './${Name}.css'
    export * from './${Name}'
    export { ${Name} as default } from './${Name}'

`
