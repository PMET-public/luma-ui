import React, { HTMLAttributes, useEffect } from 'react'
import { Component } from '../../../lib'
import { Items, Item } from './TextSwatches.styled'
import { Field, Label, Error } from '../Form'
import { TextSwatchesSkeleton } from './TextSwatches.skeleton'
import { ValidationOptions, useFormContext, ErrorMessage } from 'react-hook-form'
import _get from 'lodash.get'

export type TextSwatchesProps = {
    loading?: boolean
    error?: string
    rules?: ValidationOptions
    label?: string
    name: string
    type?: 'radio' | 'checkbox'
    items: Array<
        {
            text: string
            disabled?: boolean
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const TextSwatches: Component<TextSwatchesProps> = ({
    loading,
    error,
    label,
    name,
    rules,
    type = 'radio',
    items = [],
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
        <Field {...props}>
            {loading ? (
                <TextSwatchesSkeleton />
            ) : (
                <React.Fragment>
                    {label && (
                        <Label htmlFor={props.name} $error={hasError}>
                            {label}
                        </Label>
                    )}

                    <Items>
                        {items.map(({ text, ...item }, index) => (
                            <Item key={index}>
                                <input
                                    id={`swatch-group__${name}__${index}`}
                                    name={name}
                                    {...item}
                                    ref={register({ ...rules })}
                                    type={type}
                                />
                                <label htmlFor={`swatch-group__${name}__${index}`}>{text}</label>
                            </Item>
                        ))}
                    </Items>

                    <Error>
                        <ErrorMessage name={name}>{({ message }) => message}</ErrorMessage>
                    </Error>
                </React.Fragment>
            )}
        </Field>
    )
}
