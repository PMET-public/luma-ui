import React from 'react'
import { Component, Props } from '../../lib'
import { Root } from './Checkout.styled'
import FormBuilder, { patterns } from '../FormBuilder'

// TODO: Use Field Prop and allow overrides

export type CheckoutProps = {
    contactInfo: {
        title: Props<{ text: string }>
        email: {
            label: string
        }
        firstName: {
            label: string
        }
        lastName: {
            label: string
        }
        company: {
            label: string
        }
        address1: {
            label: string
        }
        address2: {
            label: string
        }
        city: {
            label: string
        }
        country: {
            label: string
        }
        state: {
            label: string
        }
        postalCode: {
            label: string
        }
        submitButton: Props<{ text: string }>
        onSubmit: (...args: any) => any
    }
}

export const Checkout: Component<CheckoutProps> = ({ contactInfo, ...props }) => {
    const {
        title,
        email,
        firstName,
        lastName,
        company,
        address1,
        address2,
        city,
        country,
        state,
        postalCode,
        submitButton,
        onSubmit,
    } = contactInfo

    return (
        <Root {...props}>
            <FormBuilder
                title={title}
                autoComplete={true}
                fields={[
                    {
                        ...email,
                        field: 'text',
                        name: 'email',
                        rules: {
                            required: true,
                            pattern: patterns.email,
                        },
                    },
                    {
                        ...firstName,
                        field: 'text',
                        name: 'firstName',
                        rules: {
                            required: true,
                            maxLength: 80,
                        },
                    },
                    {
                        ...lastName,
                        field: 'text',
                        name: 'lastName',
                        rules: {
                            required: true,
                            maxLength: 100,
                        },
                    },
                    {
                        ...company,
                        field: 'text',
                        name: 'company',
                        rules: {
                            maxLength: 80,
                        },
                    },
                    {
                        ...address1,
                        field: 'text',
                        name: 'address1',
                        rules: {
                            required: true,
                            maxLength: 100,
                        },
                    },
                    {
                        ...address2,
                        field: 'text',
                        name: 'address2',
                        rules: {
                            maxLength: 100,
                        },
                    },
                    {
                        ...city,
                        field: 'text',
                        name: 'city',
                        rules: {
                            required: true,
                            maxLength: 100,
                        },
                    },
                    {
                        ...country,
                        field: 'text',
                        name: 'country',
                        rules: {
                            required: true,
                            maxLength: 2,
                        },
                    },
                    {
                        ...state,
                        field: 'text',
                        name: 'state',
                        rules: {
                            required: true,
                            maxLength: 80,
                        },
                    },
                    {
                        ...postalCode,
                        field: 'text',
                        name: 'postalCode',
                        rules: {
                            required: true,
                            maxLength: 10,
                        },
                    },
                ]}
                submitButton={submitButton}
                onSubmit={onSubmit}
            />
        </Root>
    )
}
