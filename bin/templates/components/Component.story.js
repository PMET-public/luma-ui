const source = require('common-tags').source

module.exports = Name => source`

    import React from 'react'
    import ${Name} from './'
    import { storiesOf } from '@storybook/react'
    import centered from '@storybook/addon-centered/dist/react'

    storiesOf('📦 Components/${Name}', module)
        .addDecorator(centered)
        .add('Default', () => (
            <${Name} />
        ))

` + '\n'
