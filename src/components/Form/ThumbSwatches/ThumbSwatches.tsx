import React, { HTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Items, Item } from './ThumbSwatches.styled'

import Image, { ImageProps } from '../../Image'
import { Field, Label, Error } from '../Form'
import { ThumbSwatchesSkeleton } from './ThumbSwatches.skeleton'

export type ThumbSwatchesProps = {
    loading?: boolean
    name: string
    type?: 'radio' | 'checkbox'
    label?: string
    error?: boolean | { message: string }
    items: Array<
        {
            image: ImageProps
            disabled?: boolean
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const ThumbSwatches: Component<ThumbSwatchesProps> = React.forwardRef(
    ({ loading, name, type = 'radio', label, error, items = [], ...props }, ref) => {
        return (
            <Field {...props}>
                {loading ? (
                    <ThumbSwatchesSkeleton />
                ) : (
                    <React.Fragment>
                        {label && (
                            <Label htmlFor={props.name} $error={!!error}>
                                {label}
                            </Label>
                        )}

                        <Items>
                            {items.map(({ image, ...item }, index) => (
                                <Item key={index}>
                                    <input
                                        id={`swatch-group__${name}__${index}`}
                                        ref={ref as any}
                                        type={type}
                                        name={name}
                                        defaultChecked={items.length === 1}
                                        {...item}
                                    />
                                    <label htmlFor={`swatch-group__${name}__${index}`}>
                                        <Image transition width={4} height={5} {...image} />
                                    </label>
                                </Item>
                            ))}
                        </Items>

                        <Error>{typeof error === 'object' && error.message}</Error>
                    </React.Fragment>
                )}
            </Field>
        )
    }
)
