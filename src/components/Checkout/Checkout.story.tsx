import React from 'react'
import Checkout from './'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Checkout', module).add('Default', () => (
    <Checkout
        contactInfo={{
            title: {
                text: 'Contact Information',
            },
            email: {
                label: 'Email',
            },
            firstName: {
                label: 'First Name',
            },
            lastName: {
                label: 'Last Name',
            },
            company: {
                label: 'Company (optional)',
            },
            address1: {
                label: 'Address',
            },
            address2: {
                label: 'Apt, Suite, Unit, etc (optional)',
            },
            city: {
                label: 'City',
            },
            country: {
                label: 'Country',
            },
            state: {
                label: 'State',
            },
            postalCode: {
                label: 'Postal Code',
            },
            submitButton: {
                text: 'Save',
            },
            onSubmit: action('onSubmit'),
        }}
    />
))
