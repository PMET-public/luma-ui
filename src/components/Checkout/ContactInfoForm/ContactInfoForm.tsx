import React from 'react'
import { Component } from '../../../lib'
import {
    Root,
    Email,
    FirstName,
    LastName,
    Company,
    Address1,
    Address2,
    City,
    Country,
    Region,
    PostalCode,
    PhoneNumber,
} from './ContactInfoForm.styled'

import Form, { FormProps, Input, InputProps, Select, SelectProps, FormError, patterns } from '../../Form'
import Button, { ButtonProps } from '../../Button'

export type ContactInfoFormPayload = {
    email: string
    firstName: string
    lastName: string
    company?: string
    address1: string
    address2?: string
    city: string
    region: string
    postalCode: string
    country: string
    phone: string
}

export type ContactInfoFormProps = FormProps<ContactInfoFormPayload> & {
    edit?: boolean
    fields: {
        email: InputProps
        firstName: InputProps
        lastName: InputProps
        company: InputProps
        address1: InputProps
        address2: InputProps
        city: InputProps
        country: SelectProps
        region: ({ type: 'text' } & InputProps) | ({ type: 'select' } & SelectProps)
        postalCode: InputProps
        phone: InputProps
    }
    editButton: ButtonProps
    submitButton: ButtonProps
    onSubmit: (payload: ContactInfoFormPayload) => any
    onEdit: (...args: any) => any
    loading?: boolean
    submitting?: boolean
    error?: string
}

export const ContactInfoForm: Component<ContactInfoFormProps> = ({
    edit = false,
    fields,
    submitButton,
    editButton,
    onSubmit,
    onEdit,
    loading,
    submitting,
    error,
    ...props
}) => {
    const { email, firstName, lastName, company, address1, address2, city, country, region, postalCode, phone } = fields

    const disabled = submitting || !edit

    return (
        <Form autoComplete={props.disabled ? 'off' : 'on'} onSubmit={onSubmit} {...props}>
            <Root $preview={!edit}>
                <Email>
                    <Input
                        loading={loading}
                        rules={{ required: true, pattern: patterns.email }}
                        disabled={disabled}
                        {...email}
                    />
                </Email>
                <FirstName>
                    <Input loading={loading} rules={{ required: true }} disabled={disabled} {...firstName} />
                </FirstName>
                <LastName>
                    <Input loading={loading} rules={{ required: true }} disabled={disabled} {...lastName} />
                </LastName>
                <Company>
                    <Input loading={loading} disabled={disabled} {...company} />
                </Company>
                <Address1>
                    <Input loading={loading} rules={{ required: true }} disabled={disabled} {...address1} />
                </Address1>
                <Address2>
                    <Input loading={loading} disabled={disabled} {...address2} />
                </Address2>
                <City>
                    <Input loading={loading} rules={{ required: true }} disabled={disabled} {...city} />
                </City>
                <Country>
                    <Select loading={loading} rules={{ required: true }} disabled={disabled} {...country} />
                </Country>
                <Region>
                    {region.type === 'select' ? (
                        <Select loading={loading} rules={{ required: true }} disabled={disabled} {...region} />
                    ) : (
                        <Input loading={loading} rules={{ required: true }} disabled={disabled} {...region} />
                    )}
                </Region>
                <PostalCode>
                    <Input loading={loading} rules={{ required: true }} disabled={disabled} {...postalCode} />
                </PostalCode>
                <PhoneNumber>
                    <Input loading={loading} rules={{ required: true }} disabled={disabled} {...phone} />
                </PhoneNumber>
            </Root>

            {error && <FormError>{error}</FormError>}

            {edit ? (
                <Button type="submit" loading={loading || submitting} {...submitButton} />
            ) : (
                <Button
                    type="button"
                    outline
                    onClick={(e: Event) => {
                        e.preventDefault()
                        onEdit()
                    }}
                    {...editButton}
                />
            )}
        </Form>
    )
}
