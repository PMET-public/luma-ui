import React, { OptionHTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Select as SelectRoot, Wrapper } from './Select.styled'
import { FormFieldProps, Field, Label, FieldInput, Error, FieldColors } from '../Form'
import { SelectSkeleton } from './Select.skeleton'
import { useFormFieldError } from '../useFormFieldError'

export type SelectProps = FormFieldProps & {
    items: Array<{ text: string } & OptionHTMLAttributes<HTMLOptionElement>>
    loading?: boolean
}

export const Select: Component<SelectProps> = ({ as, error, color: _color, label, loading, name, rules, items, ...props }) => {
    const fieldError = useFormFieldError({ name, error })

    const color = _color ?? (fieldError && FieldColors.error)

    return (
        <Field as={as}>
            {label && (
                <Label htmlFor={`field-input__${name}`} color={color}>
                    {label}
                </Label>
            )}

            <React.Fragment>
                {loading ? (
                    <SelectSkeleton />
                ) : (
                    <Wrapper $disabled={props.disabled}>
                        <FieldInput id={`field-input__${name}`} as={SelectRoot} disabled={items?.length === 0} name={name} rules={rules} color={color} {...props}>
                            {items &&
                                items.map(({ text, ...option }, index) => (
                                    <option key={index} {...option}>
                                        {text}
                                    </option>
                                ))}
                        </FieldInput>
                    </Wrapper>
                )}
                <Error color={color}>{fieldError?.message}</Error>
            </React.Fragment>
        </Field>
    )
}
