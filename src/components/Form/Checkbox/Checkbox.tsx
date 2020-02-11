import React, { HTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Wrapper, Input, Item, OffIcon, OnIcon, Placeholder } from './Checkbox.styled'
import { FormFieldProps, Field, Label, Error, FieldInput } from '../Form'

import RadioOnIconSvg from 'remixicon/icons/System/checkbox-circle-line.svg'
import RadioOffIconSvg from 'remixicon/icons/System/checkbox-blank-circle-line.svg'
import CheckboxOnIconSvg from 'remixicon/icons/System/checkbox-line.svg'
import CheckboxOffIconSvg from 'remixicon/icons/System/checkbox-blank-line.svg'
import { useFormFieldError } from '../useFormFieldError'

export type CheckboxProps = FormFieldProps & {
    type?: 'checkbox' | 'radio'
    items: Array<
        {
            text: string
            value: string
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const Checkbox: Component<CheckboxProps> = ({
    as,
    error,
    rules,
    label,
    name,
    placeholder,
    type = 'checkbox',
    items,
    ...props
}) => {
    const fieldError = useFormFieldError({ name, error })

    return (
        <fieldset>
            <Field as={as} {...props}>
                {label && (
                    <Label as="legend" error={!!fieldError}>
                        {label}
                    </Label>
                )}

                {placeholder && <Placeholder>{placeholder}</Placeholder>}

                <Wrapper>
                    {items.map(({ text, ...item }, index) => (
                        <Item key={index}>
                            <FieldInput
                                as={Input}
                                type={type}
                                name={name}
                                rules={rules}
                                error={!!fieldError}
                                {...item}
                            />
                            <OffIcon as={type === 'radio' ? RadioOffIconSvg : CheckboxOffIconSvg} />
                            <OnIcon as={type === 'radio' ? RadioOnIconSvg : CheckboxOnIconSvg} />
                            {text}
                        </Item>
                    ))}
                </Wrapper>

                <Error>{fieldError?.message}</Error>
            </Field>
        </fieldset>
    )
}
