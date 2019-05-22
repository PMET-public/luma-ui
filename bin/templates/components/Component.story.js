const source = require('common-tags').source

module.exports = Name => source`

    import React from 'react'
    import ${Name} from './'
    import centered from '@storybook/addon-centered/react'
    import { storiesOf } from '@storybook/react'

    storiesOf('📦 Components/${Name}', module)
        .addDecorator(centered)
        .add('React', () => (
            <${Name} />
        ))

` + '\n'
