import React from 'react'
import ShippingMethodForm from '.'
import { storiesOf } from '@storybook/react'
import useForm, { FormContext } from 'react-hook-form'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Checkout/ShippingMethodForm', module).add('Default', () => {
    const methods = useForm()
    return (
        <FormContext {...methods}>
            <ShippingMethodForm
                edit={boolean('edit', false)}
                items={[
                    { text: 'Fixed - $5.00', value: '1' },
                    { text: '1-Day Express - $29.99', value: '2' },
                ]}
                submitButton={{
                    text: 'Save',
                }}
                editButton={{
                    text: 'Edit',
                }}
                onSubmit={() => {
                    throw Error('Oops!. There was an error... `cause your are just testing ;)')
                }}
                onEdit={action('onEdit')}
            />
        </FormContext>
    )
})
