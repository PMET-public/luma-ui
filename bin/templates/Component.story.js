module.exports = Name => `

import React from 'react'
import ${Name} from './'
import { storiesOf } from '@storybook/react'

storiesOf('Components/${Name}', module)
    .add('React', () => (
        <${Name} />
    ))

`.trim()
