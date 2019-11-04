import React from 'react'
import Address from '.'
import { storiesOf } from '@storybook/react'
import useForm, { FormContext } from 'react-hook-form'

storiesOf('📦 Components/Checkout/Address', module).add('Default', () => {
    const methods = useForm()
    return (
        <FormContext {...methods}>
            <Address
                firstName={{
                    label: 'First Name',
                }}
                lastName={{
                    label: 'Last Name',
                }}
                company={{
                    label: 'Company (optional)',
                }}
                address1={{
                    label: 'Address',
                }}
                address2={{
                    label: 'Apt, Suite, Unit, etc (optional)',
                }}
                city={{
                    label: 'City',
                }}
                country={{
                    label: 'Country',
                    items: [
                        {
                            text: 'United States',
                            value: 'US',
                        },
                        {
                            text: 'Venezuela',
                            value: 'VE',
                        },
                    ],
                }}
                state={{
                    label: 'State',
                }}
                postalCode={{
                    label: 'Postal Code',
                }}
            />
        </FormContext>
    )
})
