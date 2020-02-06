import React, { SelectHTMLAttributes, OptionHTMLAttributes, useEffect } from 'react'
import { Component } from '../../../lib'
import { Select as SelectRoot, Wrapper } from './Select.styled'
import { Field, Label, FieldInput, Error } from '../Form'
import { SelectSkeleton } from './Select.skeleton'
import { ValidationOptions, useFormContext, ErrorMessage } from 'react-hook-form'
import _get from 'lodash.get'

export type SelectProps = {
    label?: string
    items: Array<{ text: string } & OptionHTMLAttributes<HTMLOptionElement>>
    loading?: boolean
    name: string
    rules?: ValidationOptions
    error?: string
} & SelectHTMLAttributes<HTMLSelectElement>

export const Select: Component<SelectProps> = ({ as, error, label, loading, name, rules, items, ...props }) => {
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
        <Field as={as}>
            {label && (
                <Label htmlFor={props.name} $error={hasError}>
                    {label}
                </Label>
            )}

            {loading ? (
                <SelectSkeleton />
            ) : (
                <React.Fragment>
                    <Wrapper $disabled={props.disabled}>
                        <FieldInput
                            as={SelectRoot}
                            $error={hasError}
                            disabled={!items}
                            {...props}
                            name={name}
                            ref={register({ ...rules })}
                        >
                            {items &&
                                items.map(({ text, ...option }, index) => (
                                    <option key={index} {...option}>
                                        {text}
                                    </option>
                                ))}
                        </FieldInput>
                    </Wrapper>

                    <Error>
                        <ErrorMessage name={name}>{({ message }) => message}</ErrorMessage>
                    </Error>
                </React.Fragment>
            )}
        </Field>
    )
}
