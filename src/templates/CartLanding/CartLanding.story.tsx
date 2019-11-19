import React from 'react'
import CartLanding from '.'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { boolean } from '@storybook/addon-knobs'

storiesOf('📑 Templates/CartLanding', module).add('Default', () => (
    <App {...AppMockData}>
        <CartLanding
            title={{
                text: 'Thank you for your purchase',
            }}
            success={boolean('success', false)}
            children={
                <div>
                    <p>Your order # is: 000004011.</p>
                    <p>We'll email you an order confirmation with details and tracking info.</p>
                </div>
            }
        />
    </App>
))
