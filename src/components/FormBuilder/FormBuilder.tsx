import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Title } from './FormBuilder.styled'
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
    submitButton: ButtonProps
    onSubmit: (...args: any) => any
}

export const FormBuilder: Component<FormBuilderProps> = ({ title, fields, submitButton, onSubmit, ...props }) => {
    const { register, handleSubmit, triggerValidation, errors } = useForm()
    const { text, ...titleProps } = title

    return (
        <Root {...props}>
            <Title {...titleProps}>{text}</Title>

            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map(({ field = 'text', rules, name, ...fieldProps }, index) => {
                    switch (field) {
                        case 'text':
                            return (
                                <Input
                                    key={index}
                                    type="text"
                                    name={name}
                                    error={name ? errors[name] : false}
                                    ref={register({ ...rules })}
                                    {...(fieldProps as InputProps)}
                                />
                            )
                        case 'select':
                            return (
                                <Select
                                    key={index}
                                    name={name}
                                    error={name ? errors[name] : false}
                                    ref={register({ ...rules })}
                                    {...(fieldProps as SelectProps)}
                                />
                            )
                        case 'selection':
                            return (
                                <TextSwatches
                                    key={index}
                                    name={name}
                                    error={name ? errors[name] : false}
                                    ref={register({ ...rules })}
                                    {...(fieldProps as TextSwatchesProps)}
                                />
                            )
                        default:
                            return null
                    }
                })}

                <Button onClick={triggerValidation} {...submitButton} />
            </form>
        </Root>
    )
}
