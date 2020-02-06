import React, { HTMLAttributes, useEffect } from 'react'
import { Component } from '../../../lib'
import { Wrapper, Input, Item, OffIcon, OnIcon, Placeholder } from './Checkbox.styled'
import { Field, Label, Error } from '../Form'

import RadioOnIconSvg from 'remixicon/icons/System/checkbox-circle-line.svg'
import RadioOffIconSvg from 'remixicon/icons/System/checkbox-blank-circle-line.svg'
import CheckboxOnIconSvg from 'remixicon/icons/System/checkbox-line.svg'
import CheckboxOffIconSvg from 'remixicon/icons/System/checkbox-blank-line.svg'
import { ValidationOptions, useFormContext, ErrorMessage } from 'react-hook-form'
import _get from 'lodash.get'

export type CheckboxProps = {
    label?: string
    error?: string
    rules?: ValidationOptions
    type?: 'checkbox' | 'radio'
    items: Array<
        {
            text: string
            value: string
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const Checkbox: Component<CheckboxProps> = ({
    as,
    error,
    rules,
    label,
    name,
    placeholder,
    type = 'checkbox',
    items,
    ...props
}) => {
    const { register, setError, clearError, errors } = useFormContext()

    const hasError = !!error || !!_get(errors, name)

    useEffect(() => {
        if (error) {
            setError(name, 'server', error)
        } else {
            clearError(name)
        }
    }, [error])

    return (
        <fieldset>
            <Field as={as} {...props}>
                {label && (
                    <Label as="legend" $error={hasError}>
                        {label}
                    </Label>
                )}

                {placeholder && <Placeholder>{placeholder}</Placeholder>}

                <Wrapper>
                    {items.map(({ text, ...item }, index) => (
                        <Item key={index}>
                            <Input
                                key={props.defaultValue as string} // update field when defaultValue changes
                                type={type}
                                {...item}
                                name={name}
                                ref={register({ ...rules })}
                            />
                            <OffIcon as={type === 'radio' ? RadioOffIconSvg : CheckboxOffIconSvg} />
                            <OnIcon as={type === 'radio' ? RadioOnIconSvg : CheckboxOnIconSvg} />
                            {text}
                        </Item>
                    ))}
                </Wrapper>

                <Error>
                    <ErrorMessage name={name}>{({ message }) => message}</ErrorMessage>
                </Error>
            </Field>
        </fieldset>
    )
}
