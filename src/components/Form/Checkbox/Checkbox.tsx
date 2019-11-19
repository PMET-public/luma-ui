import React, { HTMLAttributes } from 'react'
import { Component } from '../../../lib'
import { Wrapper, Input, Item, OffIcon, OnIcon, Placeholder } from './Checkbox.styled'
import { Field, Label, Error } from '../Form'

import RadioOnIconSvg from 'remixicon/icons/System/checkbox-circle-line.svg'
import RadioOffIconSvg from 'remixicon/icons/System/checkbox-blank-circle-line.svg'
import CheckboxOnIconSvg from 'remixicon/icons/System/checkbox-line.svg'
import CheckboxOffIconSvg from 'remixicon/icons/System/checkbox-blank-line.svg'

export type CheckboxProps = {
    label?: string
    error?: { message?: string } | boolean
    type?: 'checkbox' | 'radio'
    items: Array<
        {
            text: string
            value: string
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const Checkbox: Component<CheckboxProps> = React.forwardRef(
    ({ label, as, error, name, placeholder, type = 'checkbox', items, ...props }, ref: any) => {
        return (
            <fieldset>
                <Field as={as} {...props}>
                    {label && (
                        <Label as="legend" $error={!!error}>
                            {label}
                        </Label>
                    )}

                    {placeholder && <Placeholder>{placeholder}</Placeholder>}

                    <Wrapper>
                        {items.map(({ text, ...item }, index) => (
                            <Item key={index}>
                                <Input type={type} name={name} ref={ref} {...item} />
                                <OffIcon as={type === 'radio' ? RadioOffIconSvg : CheckboxOffIconSvg} />
                                <OnIcon as={type === 'radio' ? RadioOnIconSvg : CheckboxOnIconSvg} />
                                {text}
                            </Item>
                        ))}
                    </Wrapper>

                    <Error>{typeof error === 'object' && error.message}</Error>
                </Field>
            </fieldset>
        )
    }
)
