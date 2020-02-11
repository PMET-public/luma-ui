import React, { HTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Items, Item } from './ThumbSwatches.styled'

import Image, { ImageProps } from '../../Image'
import { FormFieldProps, Field, Label, FieldInput, Error } from '../Form'
import { ThumbSwatchesSkeleton } from './ThumbSwatches.skeleton'
import { useFormFieldError } from '../useFormFieldError'

export type ThumbSwatchesProps = FormFieldProps & {
    loading?: boolean
    type?: 'radio' | 'checkbox'
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
    const fieldError = useFormFieldError({ name, error })

    return (
        <Field {...props}>
            {loading ? (
                <ThumbSwatchesSkeleton />
            ) : (
                <React.Fragment>
                    {label && (
                        <Label htmlFor={props.name} error={!!fieldError}>
                            {label}
                        </Label>
                    )}

                    <Items>
                        {items.map(({ image, ...item }, index) => (
                            <Item key={index}>
                                <FieldInput
                                    id={`swatch-group__${name}__${index}`}
                                    type={type}
                                    name={name}
                                    rules={rules}
                                    error={!!fieldError}
                                    {...item}
                                />
                                <label htmlFor={`swatch-group__${name}__${index}`}>
                                    <Image transition width={4} height={5} {...image} />
                                </label>
                            </Item>
                        ))}
                    </Items>

                    <Error>{fieldError?.message}</Error>
                </React.Fragment>
            )}
        </Field>
    )
}
