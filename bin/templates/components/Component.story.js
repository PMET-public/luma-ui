const source = require('common-tags').source

module.exports = (Name, folder = 'components') => {

    labels = {
        components: '📦 Components',
        templates: '📑 Templates',
    }
    
    return source`

        import React from 'react'
        import ${Name} from './'
        import { storiesOf } from '@storybook/react'

        storiesOf('${labels[folder]}/${Name}', module)
            .add('Default', () => (
                <${Name} />
            ))

    ` + '\n'
}
