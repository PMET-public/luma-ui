const source = require('common-tags').source

module.exports = (Name, folder = 'components') => {
    labels = {
        components: '📦 Components',
        pages: '📑 Pages',
    }

    return (
        source`
        import React from 'react'
        import ${Name} from './'
        import { storiesOf } from '@storybook/react'
        
        storiesOf('📦 Components/${Name}', module).add('Default', () => <${Name} />)
    ` + '\n'
    )
}
