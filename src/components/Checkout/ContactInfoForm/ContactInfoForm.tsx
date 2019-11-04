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
}

export type ContactInfoFormProps = {
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
    }
    submitButton: ButtonProps
    onSubmit: (payload: ContactInfoFormPayload) => any
}

export const ContactInfoForm: Component<ContactInfoFormProps> = ({ fields, submitButton, onSubmit, ...props }) => {
    const { handleSubmit, register, errors } = useForm<ContactInfoFormPayload>()

    const { email, firstName, lastName, company, address1, address2, city, country, region, postalCode } = fields

    return (
        <Root as={Form} onSubmit={handleSubmit(onSubmit)} {...props}>
            <Email>
                <Input
                    {...email}
                    name="email"
                    ref={register({ required: true, pattern: patterns.email })}
                    error={errors.email}
                />
            </Email>
            <FirstName>
                <Input {...firstName} name="firstName" ref={register({ required: true })} error={errors.firstName} />
            </FirstName>
            <LastName>
                <Input {...lastName} name="lastName" ref={register({ required: true })} error={errors.lastName} />
            </LastName>
            <Company>
                <Input {...company} name="company" ref={register} error={errors.company} />
            </Company>
            <Address1>
                <Input {...address1} name="address1" ref={register({ required: true })} error={errors.address1} />
            </Address1>
            <Address2>
                <Input {...address2} name="address2" ref={register} error={errors.address2} />
            </Address2>
            <City>
                <Input {...city} name="city" ref={register({ required: true })} error={errors.city} />
            </City>
            <Country>
                <Select {...country} name="country" ref={register({ required: true })} error={errors.country} />
            </Country>
            <Region>
                <Input {...region} name="region" ref={register({ required: true })} error={errors.region} />
            </Region>
            <PostalCode>
                <Input {...postalCode} name="postalCode" ref={register({ required: true })} error={errors.postalCode} />
            </PostalCode>

            <Button {...submitButton} />
        </Root>
    )
}
