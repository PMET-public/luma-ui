import React from 'react'
import ApplyCouponForm from '.'
import { storiesOf } from '@storybook/react'
import { useForm, FormContext } from 'react-hook-form'
import { boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Checkout/ApplyCouponForm', module).add('Default', () => {
    const methods = useForm()

    return (
        <FormContext {...methods}>
            <ApplyCouponForm
                field={{
                    label: 'Gift Card',
                    name: 'giftCard',
                }}
                loading={boolean('loading', false)}
                submitButton={{
                    text: 'Apply',
                }}
                onSubmit={() => {
                    return new Promise((resolve, reject) => {
                        return setTimeout(() => {
                            reject({ message: 'Oops!. There was an error... `cause your are just testing ;)' })
                        }, 3000)
                    })
                }}
            />
        </FormContext>
    )
})
