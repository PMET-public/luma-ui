import React from 'react'
import PlaceOrderForm from '.'
import { storiesOf } from '@storybook/react'
import useForm, { FormContext } from 'react-hook-form'
import { boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Checkout/PlaceOrderForm', module).add('Default', () => {
    const methods = useForm()
    return (
        <FormContext {...methods}>
            <PlaceOrderForm
                loading={boolean('loading', false)}
                submitButton={{
                    text: 'Place Order',
                }}
                onSubmit={() => {
                    throw Error('Oops!. There was an error... `cause your are just testing ;)')
                }}
            />
        </FormContext>
    )
})
