import React from 'react'
import Html from '.'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { stripIndent } from 'common-tags'

storiesOf('📦 Components/Html', module).add('Default', () => (
    <Html
        source={text(
            'source',
            stripIndent`
                <h1>Html Block</h1>
                <p>
                    I'm a paragraph
                </p>
                
                <ul>
                    <li>One</li>
                    <li>Two</li>
                    <li>Three</li
                ></ul>
            `
        )}
    />
))
