import React from 'react'
import { Component } from '../../../lib'
import {
    Root,
    FirstName,
    LastName,
    Company,
    Address1,
    Address2,
    City,
    Country,
    State,
    PostalCode,
} from './Address.styled'
import { useFormContext } from 'react-hook-form'

import { Input, InputProps, Select, SelectProps } from '../../Form'

export type AddressProps = {
    firstName: InputProps
    lastName: InputProps
    company: InputProps
    address1: InputProps
    address2: InputProps
    city: InputProps
    country: SelectProps
    state: InputProps
    postalCode: InputProps
}

export const Address: Component<AddressProps> = ({
    firstName,
    lastName,
    company,
    address1,
    address2,
    city,
    country,
    state,
    postalCode,
    ...props
}) => {
    const { register, errors } = useFormContext()

    return (
        <Root {...props}>
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
            <State>
                <Input {...state} name="state" ref={register({ required: true })} error={errors.state} />
            </State>
            <PostalCode>
                <Input {...postalCode} name="postalCode" ref={register({ required: true })} error={errors.postalCode} />
            </PostalCode>
        </Root>
    )
}
