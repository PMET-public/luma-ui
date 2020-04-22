import React from 'react'
import CartLanding from '.'
import { storiesOf } from '@storybook/react'
import Button from '../Button'

storiesOf('📦 Components/CartLanding', module).add('Default', () => (
    <CartLanding title={{ text: 'Shopping Bag' }}>
        <Button style={{ marginTop: '2rem' }}>Get Shopping</Button>
    </CartLanding>
))
