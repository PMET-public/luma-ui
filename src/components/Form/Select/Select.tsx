import React, { OptionHTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Select as SelectRoot, Wrapper } from './Select.styled'
import { FormFieldProps, Field, Label, FieldInput, Error } from '../Form'
import { SelectSkeleton } from './Select.skeleton'
import { useFormFieldError } from '../useFormFieldError'

export type SelectProps = FormFieldProps & {
    items: Array<{ text: string } & OptionHTMLAttributes<HTMLOptionElement>>
    loading?: boolean
}

export const Select: Component<SelectProps> = ({ as, error, label, loading, name, rules, items, ...props }) => {
    const fieldError = useFormFieldError({ name, error })

    return (
        <Field as={as}>
            {label && (
                <Label htmlFor={name} error={!!fieldError}>
                    {label}
                </Label>
            )}

            {loading ? (
                <SelectSkeleton />
            ) : (
                <React.Fragment>
                    <Wrapper $disabled={props.disabled}>
                        <FieldInput
                            as={SelectRoot}
                            disabled={items?.length === 0}
                            name={name}
                            rules={rules}
                            error={!!fieldError}
                            {...props}
                        >
                            {items &&
                                items.map(({ text, ...option }, index) => (
                                    <option key={index} {...option}>
                                        {text}
                                    </option>
                                ))}
                        </FieldInput>
                    </Wrapper>

                    <Error>{fieldError?.message}</Error>
                </React.Fragment>
            )}
        </Field>
    )
}
