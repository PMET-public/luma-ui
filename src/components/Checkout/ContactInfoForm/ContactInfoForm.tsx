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
import useForm from 'react-hook-form'

import Form, { Input, InputProps, Select, SelectProps, patterns } from '../../Form'
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
        region: InputProps
        postalCode: InputProps
        phone: InputProps
    }
    editButton: ButtonProps
    submitButton: ButtonProps
    onSubmit: (payload: ContactInfoFormPayload) => any
    onEdit: (...args: any) => any
}

export const ContactInfoForm: Component<ContactInfoFormProps> = ({
    edit = false,
    fields,
    submitButton,
    editButton,
    onSubmit,
    onEdit,
    ...props
}) => {
    const { handleSubmit, register, errors, formState } = useForm<ContactInfoFormPayload>()

    const { email, firstName, lastName, company, address1, address2, city, country, region, postalCode, phone } = fields

    const disabled = formState.isSubmitting || !edit

    return (
        <Form autoComplete={props.disabled ? 'off' : 'on'} onSubmit={handleSubmit(onSubmit)} {...props}>
            <Root $preview={!edit}>
                <Email>
                    <Input
                        {...email}
                        name="email"
                        ref={register({ required: true, pattern: patterns.email })}
                        error={errors.email}
                        disabled={disabled}
                    />
                </Email>
                <FirstName>
                    <Input
                        {...firstName}
                        name="firstName"
                        ref={register({ required: true })}
                        error={errors.firstName}
                        disabled={disabled}
                    />
                </FirstName>
                <LastName>
                    <Input
                        {...lastName}
                        name="lastName"
                        ref={register({ required: true })}
                        error={errors.lastName}
                        disabled={disabled}
                    />
                </LastName>
                <Company>
                    <Input {...company} name="company" ref={register} error={errors.company} disabled={disabled} />
                </Company>
                <Address1>
                    <Input
                        {...address1}
                        name="street[0]"
                        ref={register({ required: true })}
                        error={errors.address1}
                        disabled={disabled}
                    />
                </Address1>
                <Address2>
                    <Input {...address2} name="street[1]" ref={register} error={errors.address2} disabled={disabled} />
                </Address2>
                <City>
                    <Input
                        {...city}
                        name="city"
                        ref={register({ required: true })}
                        error={errors.city}
                        disabled={disabled}
                    />
                </City>
                <Country>
                    <Select
                        {...country}
                        name="country"
                        ref={register({ required: true })}
                        error={errors.country}
                        disabled={disabled}
                    />
                </Country>
                <Region>
                    <Input
                        {...region}
                        name="region"
                        ref={register({ required: true })}
                        error={errors.region}
                        disabled={disabled}
                    />
                </Region>
                <PostalCode>
                    <Input
                        {...postalCode}
                        name="postalCode"
                        ref={register({ required: true })}
                        error={errors.postalCode}
                        disabled={disabled}
                    />
                </PostalCode>
                <PhoneNumber>
                    <Input
                        {...phone}
                        name="phone"
                        ref={register({ required: true })}
                        error={errors.phone}
                        disabled={disabled}
                    />
                </PhoneNumber>
            </Root>

            {edit ? (
                <Button type="submit" loading={formState.isSubmitting} {...submitButton} />
            ) : (
                <Button
                    type="button"
                    secondary
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
