module.exports = Name => `

export * from './${Name}'
export { ${Name} as default } from './${Name}'

`.trim()