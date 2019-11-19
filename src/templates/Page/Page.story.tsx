import React from 'react'
import Page from '../Page'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'

storiesOf('📑 Templates/Page', module).add(
    'Default',
    () => (
        <App {...AppMockData}>
            <Page />
        </App>
    ),
    {
        theme: {
            layout: 'fullPage',
        },
    }
)
