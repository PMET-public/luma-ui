import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Title, Form } from './FormBuilder.styled'
import useForm from 'react-hook-form'
import { ValidationOptions } from 'react-hook-form/dist/types'
import Button, { ButtonProps } from '../Button'

import Input, { InputProps } from './Input'
import Select, { SelectProps } from './Select'
import TextSwatches, { TextSwatchesProps } from './TextSwatches'

export type FormBuilderProps = {
    title: Props<{
        text: string
    }>
    fields: Array<
        {
            required?: boolean
            name?: string
            rules?: ValidationOptions
        } & (
            | ({
                  field: 'text'
              } & InputProps)
            | ({
                  field: 'select'
              } & SelectProps)
            | ({
                  field: 'selection'
              } & TextSwatchesProps))
    >
    autoComplete?: boolean
    submitButton: ButtonProps
    onSubmit: (...args: any) => any
}

export const FormBuilder: Component<FormBuilderProps> = ({
    title,
    fields,
    autoComplete,
    submitButton,
    onSubmit,
    ...props
}) => {
    const { register, handleSubmit, triggerValidation, errors } = useForm()
    const { text, ...titleProps } = title

    return (
        <Root {...props}>
            <Title {...titleProps}>{text}</Title>

            <Form autoComplete={autoComplete ? 'on' : 'off'} onSubmit={handleSubmit(onSubmit)}>
                {fields.map(({ field = 'text', rules, name, ...fieldProps }, index) => {
                    switch (field) {
                        case 'text':
                            return (
                                <div key={index} className={`FormBuilderField__${name}`}>
                                    <Input
                                        type="text"
                                        name={name}
                                        error={name ? errors[name] : false}
                                        ref={register({ ...rules })}
                                        {...(fieldProps as InputProps)}
                                    />
                                </div>
                            )
                        case 'select':
                            return (
                                <div key={index} className={`FormBuilderField__${name}`}>
                                    <Select
                                        name={name}
                                        error={name ? errors[name] : false}
                                        ref={register({ ...rules })}
                                        {...(fieldProps as SelectProps)}
                                    />
                                </div>
                            )
                        case 'selection':
                            return (
                                <div key={index} className={`FormBuilderField__${name}`}>
                                    <TextSwatches
                                        name={name}
                                        error={name ? errors[name] : false}
                                        ref={register({ ...rules })}
                                        {...(fieldProps as TextSwatchesProps)}
                                    />
                                </div>
                            )
                        default:
                            return null
                    }
                })}

                <Button onClick={triggerValidation} {...submitButton} />
            </Form>
        </Root>
    )
}
