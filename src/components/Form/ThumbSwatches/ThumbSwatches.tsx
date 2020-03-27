import React, { HTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Items, Item } from './ThumbSwatches.styled'

import Image, { ImageProps } from '../../Image'
import { FormFieldProps, Field, Label, FieldInput, Error, FieldColors } from '../Form'
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
    color: _color,
    rules,
    items = [],
    ...props
}) => {
    const fieldError = useFormFieldError({ name, error })

    const color = _color ?? (fieldError && FieldColors.error)

    return (
        <Field {...props}>
            {loading ? (
                <ThumbSwatchesSkeleton />
            ) : (
                <React.Fragment>
                    {label && (
                        <Label htmlFor={props.name} color={color}>
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
                                    color={color as any}
                                    {...item}
                                />
                                <label htmlFor={`swatch-group__${name}__${index}`}>
                                    <Image transition width={4} height={5} lazyload={{ offsetY: 100 }} {...image} />
                                </label>
                            </Item>
                        ))}
                    </Items>

                    <Error color={color}>{fieldError?.message}</Error>
                </React.Fragment>
            )}
        </Field>
    )
}
