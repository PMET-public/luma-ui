import React, { HTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Items, Item } from './TextSwatches.styled'
import { Field, Label, Error } from '../Form'
import { TextSwatchesSkeleton } from './TextSwatches.skeleton'

export type TextSwatchesProps = {
    loading?: boolean
    label?: string
    name: string
    error?: { message?: string } | boolean
    type?: 'radio' | 'checkbox'
    items: Array<
        {
            text: string
            disabled?: boolean
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const TextSwatches: Component<TextSwatchesProps> = React.forwardRef(
    ({ loading, label, error, name, type = 'radio', items = [], ...props }, ref) => {
        return (
            <Field {...props}>
                {loading ? (
                    <TextSwatchesSkeleton />
                ) : (
                    <React.Fragment>
                        {label && (
                            <Label htmlFor={props.name} $error={!!error}>
                                {label}
                            </Label>
                        )}

                        <Items>
                            {items.map(({ text, ...item }, index) => (
                                <Item key={index}>
                                    <input
                                        id={`swatch-group__${name}__${index}`}
                                        ref={ref as any}
                                        type={type}
                                        name={name}
                                        {...item}
                                    />
                                    <label htmlFor={`swatch-group__${name}__${index}`}>{text}</label>
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
