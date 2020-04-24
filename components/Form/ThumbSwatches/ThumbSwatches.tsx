import React, { HTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Image, Item } from './ThumbSwatches.styled'

import { ImageProps } from '../../Image'
import Carousel from '../../Carousel'

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

export const ThumbSwatches: Component<ThumbSwatchesProps> = ({ loading, name, type = 'radio', label, error, color: _color, rules, items = [], ...props }) => {
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

                    <Carousel gap={0.3} padding={0.3} show={items.length > 3 ? 3.2 : 3} snap={false} hideScrollBar>
                        {items.map(({ image, ...item }, index) => (
                            <Item as={Carousel.Item} key={index}>
                                <FieldInput id={`swatch-group__${name}__${index}`} type={type} name={name} rules={rules} color={color as any} {...item} />
                                <label htmlFor={`swatch-group__${name}__${index}`}>
                                    <Image width={160} height={198} {...image} />
                                </label>
                            </Item>
                        ))}
                    </Carousel>

                    <Error color={color}>{fieldError?.message}</Error>
                </React.Fragment>
            )}
        </Field>
    )
}
