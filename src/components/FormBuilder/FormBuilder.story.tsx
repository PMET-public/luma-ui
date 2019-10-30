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
                field: 'text',
                label: 'First Name',
                name: 'firstName',
                rules: {
                    required: true,
                },
            },
            {
                field: 'text',
                label: 'Last Name',
                name: 'lastName',
                rules: {
                    required: true,
                },
            },
            {
                field: 'selection',
                label: 'One or Two?',
                name: 'oneTwo',
                items: [{ text: 'one', value: 1 }, { text: 'two', value: 2 }],
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
