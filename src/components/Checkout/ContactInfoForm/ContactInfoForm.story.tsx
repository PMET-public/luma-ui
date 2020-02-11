import React from 'react'
import ContactInfoForm from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Checkout/ContactInfoForm', module).add('Default', () => {
    return (
        <ContactInfoForm
            loading={boolean('loading', false)}
            edit={boolean('edit', false)}
            fields={{
                email: {
                    name: 'email',
                    label: 'Email',
                },
                firstName: {
                    name: 'firstName',
                    label: 'First Name',
                },
                lastName: {
                    name: 'lastName',
                    label: 'Last Name',
                },
                company: {
                    name: 'company',
                    label: 'Company (optional)',
                },
                address1: {
                    name: 'address1',
                    label: 'Address',
                },
                address2: {
                    name: 'address2',
                    label: 'Apt, Suite, Unit, etc (optional)',
                },
                city: {
                    name: 'city',
                    label: 'City',
                },
                country: {
                    name: 'country',
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
                },
                region: {
                    name: 'region',
                    type: 'text',
                    label: 'State',
                },
                postalCode: {
                    name: 'postalCode',
                    label: 'Postal Code',
                },
                phone: {
                    name: 'phone',
                    label: 'Phone Number',
                },
            }}
            submitButton={{
                text: 'Save & Continue',
            }}
            editButton={{
                text: 'Edit',
            }}
            onSubmit={action('onSubmit')}
            onEdit={action('onEdit')}
            error={text('error', '')}
        />
    )
})
