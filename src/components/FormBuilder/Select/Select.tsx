import React, { AllHTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Root, Label, SelectField, SelectFieldWrapper, Error } from './Select.styled'

export type SelectProps = {
    label: string
    error?: { message?: string } | boolean
    items: Array<{ text: string } & AllHTMLAttributes<HTMLOptionElement>>
} & AllHTMLAttributes<HTMLSelectElement>

export const Select: Component<SelectProps> = React.forwardRef(({ label, items, as, error, ...props }, ref: any) => {
    return (
        <Root as={as}>
            {label && (
                <Label htmlFor={props.name} $error={!!error}>
                    {label}
                </Label>
            )}

            <SelectFieldWrapper>
                <SelectField as="select" $error={!!error} ref={ref} disabled={!items} {...props}>
                    {items &&
                        items.map(({ text, ...option }, index) => (
                            <option key={index} {...option}>
                                {text}
                            </option>
                        ))}
                </SelectField>
            </SelectFieldWrapper>

            <Error>{typeof error === 'object' && error.message}</Error>
        </Root>
    )
})
