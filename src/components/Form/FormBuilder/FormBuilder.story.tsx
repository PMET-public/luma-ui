import React from 'react'
import FormBuilder from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { regexDictionary } from '../../../lib'

storiesOf('📦 Components/Form/FormBuilder', module).add('Default', () => (
    <FormBuilder
        steps={[
            {
                title: {
                    text: 'Contact Information',
                },
                fields: [
                    {
                        type: 'text',
                        label: 'Email',
                        name: 'email',
                        rules: {
                            required: true,
                            pattern: regexDictionary.email,
                        },
                    },
                ],
                onSubmit: action('Contact Information Submitted'),
                button: {
                    text: 'Save',
                },
            },
            {
                title: {
                    text: 'Shippping Address',
                },
                fields: [
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
                ],
                onSubmit: action('Contact Information Submitted'),
                button: {
                    text: 'Save',
                },
            },
        ]}
    />
))
