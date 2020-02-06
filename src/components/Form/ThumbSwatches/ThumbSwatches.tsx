import React, { HTMLAttributes, useEffect } from 'react'
import { Component } from '../../../lib'
import { Items, Item } from './ThumbSwatches.styled'

import Image, { ImageProps } from '../../Image'
import { Field, Label, Error } from '../Form'
import { ThumbSwatchesSkeleton } from './ThumbSwatches.skeleton'
import { ValidationOptions, useFormContext, ErrorMessage } from 'react-hook-form'
import _get from 'lodash.get'

export type ThumbSwatchesProps = {
    loading?: boolean
    name: string
    type?: 'radio' | 'checkbox'
    label?: string
    rules?: ValidationOptions
    error?: string
    items: Array<
        {
            image: ImageProps
            disabled?: boolean
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const ThumbSwatches: Component<ThumbSwatchesProps> = ({
    loading,
    name,
    type = 'radio',
    label,
    error,
    rules,
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
                <ThumbSwatchesSkeleton />
            ) : (
                <React.Fragment>
                    {label && (
                        <Label htmlFor={props.name} $error={hasError}>
                            {label}
                        </Label>
                    )}

                    <Items>
                        {items.map(({ image, ...item }, index) => (
                            <Item key={index}>
                                <input
                                    id={`swatch-group__${name}__${index}`}
                                    ref={register({ ...rules })}
                                    type={type}
                                    name={name}
                                    {...item}
                                />
                                <label htmlFor={`swatch-group__${name}__${index}`}>
                                    <Image transition width={4} height={5} {...image} />
                                </label>
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
