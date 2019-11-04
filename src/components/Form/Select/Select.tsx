import React, { AllHTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Select as SelectRoot, Wrapper } from './Select.styled'
import { Field, Label, FieldInput, Error } from '../Form'

export type SelectProps = {
    label: string
    error?: { message?: string } | boolean
    items: Array<{ text: string } & AllHTMLAttributes<HTMLOptionElement>>
} & AllHTMLAttributes<HTMLSelectElement>

export const Select: Component<SelectProps> = React.forwardRef(({ label, items, as, error, ...props }, ref: any) => {
    return (
        <Field as={as}>
            {label && (
                <Label htmlFor={props.name} $error={!!error}>
                    {label}
                </Label>
            )}

            <Wrapper>
                <FieldInput as={SelectRoot} $error={!!error} ref={ref} disabled={!items} {...props}>
                    {items &&
                        items.map(({ text, ...option }, index) => (
                            <option key={index} {...option}>
                                {text}
                            </option>
                        ))}
                </FieldInput>
            </Wrapper>

            <Error>{typeof error === 'object' && error.message}</Error>
        </Field>
    )
})
