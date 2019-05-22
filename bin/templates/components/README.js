const source = require('common-tags').source

module.exports = Name => source`

    # Components/${Name}

    javascript\`\`\`
    import 'luma-storybook/dist/components/${Name}'
    \`\`\`

`
