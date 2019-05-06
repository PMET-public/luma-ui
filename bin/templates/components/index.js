module.exports = Name => `

import './${Name}.css'
export * from './${Name}'
export { ${Name} as default } from './${Name}'

`.trimLeft()
