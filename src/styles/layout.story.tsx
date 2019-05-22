import React from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import CodeBlock from '../utilities/CodeBlock'

storiesOf('💅 Styles/📐 Layout', module)
    .addDecorator(centered)
    .add('Theme', () => (
        <div className="container">
            <CodeBlock language="css">{`
                <div class="container"></div>
            `}</CodeBlock>
        </div>
    ))
