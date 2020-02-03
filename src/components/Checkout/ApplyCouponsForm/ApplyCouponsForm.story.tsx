import React from 'react'
import ApplyCouponsForm from '.'
import { storiesOf } from '@storybook/react'
import { useForm, FormContext } from 'react-hook-form'
import { boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Checkout/ApplyCouponsForm', module).add('Default', () => {
    const methods = useForm()
    return (
        <FormContext {...methods}>
            <ApplyCouponsForm
                fields={{
                    giftCardCode: {
                        label: 'Gift Card',
                    },
                    couponCode: {
                        label: 'Coupon',
                    },
                }}
                loading={boolean('loading', false)}
                submitButton={{
                    text: 'Apply',
                }}
                onSubmit={() => {
                    throw Error('Oops!. There was an error... `cause your are just testing ;)')
                }}
            />
        </FormContext>
    )
})
