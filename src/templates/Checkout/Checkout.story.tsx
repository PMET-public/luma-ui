import React from 'react'
import Checkout from './'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📑 Templates/Checkout', module).add('Checkout', () => (
    <App {...AppMockData}>
        <Checkout
            breadcrumbs={{ prefix: '#', items: [{ text: 'Cart' }, { text: 'Checkout' }] }}
            step={select(
                'step',
                { 'contactInfo (1)': 1, 'shippingMethod (2)': 2, 'paymentMethod (3)': 3, 'placeOrder (4)': 4 },
                1
            )}
            contactInfo={{
                title: 'Contact Information',
                fields: {
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
                        label: 'State',
                    },
                    postalCode: {
                        label: 'Postal Code',
                    },
                    phone: {
                        label: 'Phone Number',
                    },
                },
                editButton: {
                    text: 'Edit',
                },
                submitButton: {
                    text: 'Continue to Shipping',
                },
                onEdit: action('onEdit'),
                onSubmit: action('onSubmit'),
            }}
            shippingMethod={{
                title: 'Shipping',
                items: [{ text: 'Fixed $5.00', value: '1' }, { text: '1-Day Express $29.99', value: '2' }],
                editButton: {
                    text: 'Continue to Payment',
                },
                submitButton: {
                    text: 'Continue to Payment',
                },
                onEdit: action('onEdit'),
                onSubmit: action('onSubmit'),
            }}
            paymentMethod={{
                title: 'Payment',
                braintree: {
                    authorization:
                        'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNklrRjFkR2g1SW4wLmV5SmxlSEFpT2pFMU56STVNVFF6TXpBc0ltcDBhU0k2SW1GaFlqRTNaREkzTFRVeU5UVXROR0U1T1MwNVpUSmhMVGN3TURNd09ETTRORFl5TWlJc0luTjFZaUk2SW5wcmR6SmpkSEpyYWpjMWJtUjJhMk1pTENKcGMzTWlPaUpCZFhSb2VTSXNJbTFsY21Ob1lXNTBJanA3SW5CMVlteHBZMTlwWkNJNklucHJkekpqZEhKcmFqYzFibVIyYTJNaUxDSjJaWEpwWm5sZlkyRnlaRjlpZVY5a1pXWmhkV3gwSWpwbVlXeHpaWDBzSW5KcFoyaDBjeUk2V3lKdFlXNWhaMlZmZG1GMWJIUWlYU3dpYjNCMGFXOXVjeUk2ZXlKdFpYSmphR0Z1ZEY5aFkyTnZkVzUwWDJsa0lqb2liV0ZuWlc1MGJ5SjlmUS5jOUVCd3F0Q2VXN19oRldaR0JfOFdlYkFZZk00WVptS2J3ME43QW1pbTZtMFllaUQ5b21nTzVyVWtJNnJvaWdsZUJsdU1PWW9jb19wbzRSOXNwd3lIZyIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy96a3cyY3Rya2o3NW5kdmtjL2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImdyYXBoUUwiOnsidXJsIjoiaHR0cHM6Ly9wYXltZW50cy5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL2dyYXBocWwiLCJkYXRlIjoiMjAxOC0wNS0wOCJ9LCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL3prdzJjdHJrajc1bmR2a2MvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vb3JpZ2luLWFuYWx5dGljcy1zYW5kLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vemt3MmN0cmtqNzVuZHZrYyJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjpmYWxzZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiTWFnZW50byIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6Im1hZ2VudG8iLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6InprdzJjdHJrajc1bmR2a2MiLCJ2ZW5tbyI6Im9mZiIsIm1lcmNoYW50QWNjb3VudElkIjoibWFnZW50byJ9',
                    vaultManager: true,
                    preselectVaultedPaymentMethod: true,
                },
                submitButton: {
                    text: 'Save Payment Method',
                },
                onSubmit: action('onSubmit'),
            }}
            placeOrder={{
                title: 'Finish',

                submitButton: {
                    text: 'Place Order',
                },
                onSubmit: e =>
                    new Promise(resolve => {
                        // fake loader
                        setTimeout(() => {
                            action('onSubmit')(e)
                            resolve()
                        }, 3000)
                    }),
            }}
            list={{
                items: new Array(number('quantity', 2)).fill({
                    title: {
                        text: 'Jillian Top',
                    },
                    sku: 'SKU. 123456',
                    thumbnail: {
                        src: require('../../../public/images/fashion-thumb2.jpg'),
                    },
                    quantity: {
                        value: 1,
                        onUpdate: action('onUpdate'),
                        onRemove: action('onRemove'),
                        addLabel: 'Add',
                        removeLabel: 'Remove',
                        substractLabel: 'Remove',
                    },
                    price: {
                        regular: 39.99,
                    },
                    options: [{ label: 'Size', value: 'M' }, { label: 'Color', value: 'Red' }],
                }),
            }}
            summary={{
                title: { as: 'h2', text: 'Summary' },
                prices: [
                    {
                        label: 'Subtotal',
                        price: {
                            regular: 19.99,
                        },
                    },
                    {
                        label: 'Taxes',
                        price: null,
                    },
                    {
                        appearance: 'bold',
                        label: 'Total',
                        price: {
                            regular: 19.99,
                        },
                    },
                ],
            }}
        />
    </App>
))
