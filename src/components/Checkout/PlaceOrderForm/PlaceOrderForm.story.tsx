import React from 'react'
import PlaceOrderForm from '.'
import { storiesOf } from '@storybook/react'
import useForm, { FormContext } from 'react-hook-form'

storiesOf('📦 Components/Checkout/PlaceOrderForm', module).add('Default', () => {
    const methods = useForm()
    return (
        <FormContext {...methods}>
            <PlaceOrderForm
                submitButton={{
                    text: 'Save',
                }}
                onSubmit={() => {
                    throw Error('Oops!. There was an error... `cause your are just testing ;)')
                }}
            />
        </FormContext>
    )
})
