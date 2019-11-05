import React from 'react'
import Confirmation from './'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'

storiesOf('📑 Templates/Confirmation', module).add('Default', () => (
    <App {...AppMockData}>
        <Confirmation
            title={{
                text: 'Thank you for your purchase',
            }}
            children={
                <div>
                    <p>Your order # is: 000004011.</p>
                    <p>We'll email you an order confirmation with details and tracking info.</p>
                </div>
            }
        />
    </App>
))
