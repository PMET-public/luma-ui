import React from 'react'
import { Component } from '../../lib'
import {
    Root,
    Field as FieldRoot,
    Label as LabelRoot,
    Error as ErrorRoot,
    Input as InputRoot,
    FormError as FormErrorRoot,
} from './Form.styled'

import { FormContext, useForm, useFormContext, ValidationOptions } from 'react-hook-form'
import _get from 'lodash.get'

/** Form */
export type FormProps = {}

export const Form: Component<FormProps> = ({ children, onSubmit, ...props }) => {
    const form = useForm()

    return (
        <FormContext {...form}>
            <Root onSubmit={form.handleSubmit(onSubmit)} {...props}>
                {children}
            </Root>
        </FormContext>
    )
}

export type FormFieldProps = {
    name: string
    label?: string
    error?: string
    rules?: ValidationOptions
}

/** Field */
export type FieldProps = {}

export const Field: Component<FieldProps> = ({ children, ...props }) => {
    return <FieldRoot {...props}>{children}</FieldRoot>
}

/** Label */
export type LabelProps = { error?: boolean }

export const Label: Component<LabelProps> = ({ children, error = false, ...props }) => {
    return (
        <LabelRoot $error={error} {...props}>
            {children}
        </LabelRoot>
    )
}

/** FieldInput */
export type FieldInputProps = { rules?: ValidationOptions; error?: boolean }

export const FieldInput: Component<FieldInputProps> = ({ children, rules, error = false, ...props }) => {
    const { register } = useFormContext()

    return (
        <InputRoot
            $error={error}
            key={props.defaultValue as string} // update field when defaultValue changes
            {...props}
            ref={register({ ...rules })}
        >
            {children}
        </InputRoot>
    )
}

/** Field Error */
export type ErrorProps = {}

export const Error: Component<ErrorProps> = ({ children, ...props }) => {
    return <ErrorRoot {...props}>{children}</ErrorRoot>
}

/** Error */
export type FormErrorProps = {}

export const FormError: Component<FormErrorProps> = ({ children, ...props }) => {
    return <FormErrorRoot {...props}>{children}</FormErrorRoot>
}
