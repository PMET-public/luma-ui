import React, { HTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Items, Item } from './TextSwatches.styled'
import { FormFieldProps, Field, Label, FieldInput, Error, FieldColors } from '../Form'
import { TextSwatchesSkeleton } from './TextSwatches.skeleton'
import { useFormFieldError } from '../useFormFieldError'

export type TextSwatchesProps = FormFieldProps & {
    loading?: boolean
    type?: 'radio' | 'checkbox'
    items: Array<
        {
            text: string
            disabled?: boolean
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const TextSwatches: Component<TextSwatchesProps> = ({ loading, error, color: _color, label, name, rules, type = 'radio', items = [], ...props }) => {
    const fieldError = useFormFieldError({ name, error })

    const color = _color ?? (fieldError && FieldColors.error)

    return (
        <Field {...props}>
            {loading ? (
                <TextSwatchesSkeleton />
            ) : (
                <React.Fragment>
                    {label && (
                        <Label htmlFor={props.name} color={color}>
                            {label}
                        </Label>
                    )}

                    <Items>
                        {items.map(({ text, ...item }, index) => (
                            <Item key={index}>
                                <FieldInput id={`swatch-group__${name}__${index}`} rules={rules} name={name} type={type} color={color as any} {...item} />
                                <label htmlFor={`swatch-group__${name}__${index}`}>{text}</label>
                            </Item>
                        ))}
                    </Items>

                    <Error color={color as any}>{fieldError?.message}</Error>
                </React.Fragment>
            )}
        </Field>
    )
}
