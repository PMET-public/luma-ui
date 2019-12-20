import React, { useCallback, useState } from 'react'
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
import useForm from 'react-hook-form'

import Form, { Input, InputProps, Select, SelectProps, FormError, patterns } from '../../Form'
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

export type ContactInfoFormProps = {
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
}

export const ContactInfoForm: Component<ContactInfoFormProps> = ({
    edit = false,
    fields,
    submitButton,
    editButton,
    onSubmit,
    onEdit,
    loading,
    ...props
}) => {
    const { handleSubmit, register, errors } = useForm<ContactInfoFormPayload>()

    const [formError, setFormError] = useState<string | null>(null)

    const [submitting, setSubmitting] = useState(false)

    const handleOnSubmit = useCallback(
        async form => {
            setFormError(null)
            setSubmitting(true)

            try {
                await handleSubmit(onSubmit)(form)
                setSubmitting(false)
            } catch (error) {
                setFormError(error.message)
                setSubmitting(false)
            }
        },
        [handleSubmit, onSubmit]
    )

    const { email, firstName, lastName, company, address1, address2, city, country, region, postalCode, phone } = fields

    const disabled = submitting || !edit

    return (
        <Form autoComplete={props.disabled ? 'off' : 'on'} onSubmit={handleOnSubmit} {...props}>
            <Root $preview={!edit}>
                <Email>
                    <Input
                        loading={loading}
                        {...email}
                        name="email"
                        ref={register({ required: true, pattern: patterns.email })}
                        error={errors.email}
                        disabled={disabled}
                    />
                </Email>
                <FirstName>
                    <Input
                        loading={loading}
                        {...firstName}
                        name="firstName"
                        ref={register({ required: true })}
                        error={errors.firstName}
                        disabled={disabled}
                    />
                </FirstName>
                <LastName>
                    <Input
                        loading={loading}
                        {...lastName}
                        name="lastName"
                        ref={register({ required: true })}
                        error={errors.lastName}
                        disabled={disabled}
                    />
                </LastName>
                <Company>
                    <Input
                        loading={loading}
                        {...company}
                        name="company"
                        ref={register}
                        error={errors.company}
                        disabled={disabled}
                    />
                </Company>
                <Address1>
                    <Input
                        loading={loading}
                        {...address1}
                        name="street[0]"
                        ref={register({ required: true })}
                        error={errors.address1}
                        disabled={disabled}
                    />
                </Address1>
                <Address2>
                    <Input
                        loading={loading}
                        {...address2}
                        name="street[1]"
                        ref={register}
                        error={errors.address2}
                        disabled={disabled}
                    />
                </Address2>
                <City>
                    <Input
                        loading={loading}
                        {...city}
                        name="city"
                        ref={register({ required: true })}
                        error={errors.city}
                        disabled={disabled}
                    />
                </City>
                <Country>
                    <Select
                        loading={loading}
                        {...country}
                        name="country"
                        ref={register({ required: true })}
                        error={errors.country}
                        disabled={disabled}
                    />
                </Country>
                <Region>
                    {region.type === 'select' ? (
                        <Select
                            loading={loading}
                            {...region}
                            name="region"
                            ref={register({ required: true })}
                            error={errors.region}
                            disabled={disabled}
                        />
                    ) : (
                        <Input
                            loading={loading}
                            {...region}
                            name="region"
                            ref={register({ required: true })}
                            error={errors.region}
                            disabled={disabled}
                        />
                    )}
                </Region>
                <PostalCode>
                    <Input
                        loading={loading}
                        {...postalCode}
                        name="postalCode"
                        ref={register({ required: true })}
                        error={errors.postalCode}
                        disabled={disabled}
                    />
                </PostalCode>
                <PhoneNumber>
                    <Input
                        loading={loading}
                        {...phone}
                        name="phone"
                        ref={register({ required: true })}
                        error={errors.phone}
                        disabled={disabled}
                    />
                </PhoneNumber>
            </Root>

            {formError && <FormError>{formError}</FormError>}

            {edit ? (
                <Button type="submit" loading={loading || submitting} {...submitButton} />
            ) : (
                <Button
                    type="button"
                    outline
                    {...editButton}
                    onClick={(e: Event) => {
                        e.preventDefault()
                        onEdit()
                    }}
                />
            )}
        </Form>
    )
}
