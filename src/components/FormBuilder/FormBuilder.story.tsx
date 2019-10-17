import React from 'react'
import FormBuilder from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/FormBuilder', module).add('Default', () => (
    <FormBuilder
        title={{
            text: 'Contact Information',
        }}
        fields={[
            {
                type: 'text',
                label: 'First Name',
                name: 'firstName',
                rules: {
                    required: true,
                },
            },
            {
                type: 'text',
                label: 'Last Name',
                name: 'lastName',
                rules: {
                    required: true,
                },
            },
            {
                type: 'text',
                label: 'Address',
                name: 'street',
                rules: {
                    required: true,
                },
            },
            {
                type: 'text',
                label: 'City',
                name: 'city',
                rules: {
                    required: true,
                },
            },
            {
                type: 'text',
                label: 'State',
                name: 'state',
                rules: {
                    required: true,
                },
            },
            {
                type: 'text',
                label: 'Zip Code',
                name: 'zipCode',
                rules: {
                    required: true,
                },
            },
            {
                type: 'text',
                label: 'Phone Number',
                name: 'zipCode',
                rules: {
                    required: true,
                },
            },
        ]}
        submitButton={{
            text: 'Submit',
        }}
        onSubmit={action('onSubmit')}
    />
))
