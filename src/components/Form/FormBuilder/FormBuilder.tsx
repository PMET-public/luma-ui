import React from 'react'
import { Component, Props } from '../../../lib'
import { Root, Step, Title } from './FormBuilder.styled'
import useForm from 'react-hook-form'
import Input, { InputProps } from '../Input'
import Select, { SelectProps } from '../Select'
import { ValidationOptions } from 'react-hook-form/dist/types'
import Button, { ButtonProps } from '../../Button'

export type FormBuilderProps = {
    steps: Array<{
        title: Props<{
            text: string
        }>
        fields: Array<
            {
                required?: boolean
                rules?: ValidationOptions
            } & (
                | ({
                      type: 'text'
                  } & InputProps)
                | ({
                      type: 'select'
                  } & SelectProps))
        >
        button: ButtonProps
        onSubmit: (...args: any) => any
    }>
}

export const FormBuilder: Component<FormBuilderProps> = ({ steps, ...props }) => {
    const { register, handleSubmit, triggerValidation, errors } = useForm()

    return (
        <Root {...props}>
            {steps.map(({ title, fields, button, onSubmit }, index) => {
                const { text, ...titleProps } = title
                return (
                    <Step key={index}>
                        <Title {...titleProps}>{text}</Title>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {fields.map(({ type, rules, name, ...fieldProps }, index) => {
                                switch (type) {
                                    case 'text':
                                        return (
                                            <Input
                                                key={index}
                                                type="text"
                                                name={name}
                                                error={errors[name]}
                                                ref={register({ ...rules })}
                                                {...(fieldProps as InputProps)}
                                            />
                                        )
                                    case 'select':
                                        return (
                                            <Select
                                                key={index}
                                                name={name}
                                                error={errors[name]}
                                                ref={register({ ...rules })}
                                                {...(fieldProps as SelectProps)}
                                            />
                                        )
                                    default:
                                        return null
                                }
                            })}

                            <Button onClick={triggerValidation} {...button} />
                        </form>
                    </Step>
                )
            })}
        </Root>
    )
}
