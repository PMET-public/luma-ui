import React from 'react'
import { Component } from '../../lib'
import { Root, Field as FieldRoot, Label as LabelRoot, Error as ErrorRoot, Input as InputRoot } from './Form.styled'

/** Form */
export type FormProps = {}

export const Form: Component<FormProps> = ({ children, ...props }) => {
    return <Root {...props}>{children}</Root>
}

/** Field */
export type FieldProps = {}

export const Field: Component<FieldProps> = ({ children, ...props }) => {
    return <FieldRoot {...props}>{children}</FieldRoot>
}

/** Label */
export type LabelProps = {}

export const Label: Component<LabelProps> = ({ children, ...props }) => {
    return <LabelRoot {...props}>{children}</LabelRoot>
}

/** FieldInput */
export type FieldInputProps = {}

export const FieldInput: Component<FieldInputProps> = React.forwardRef(({ children, ...props }, ref: any) => {
    return (
        <InputRoot ref={ref} {...props}>
            {children}
        </InputRoot>
    )
})

/** Error */
export type ErrorProps = {}

export const Error: Component<ErrorProps> = ({ children, ...props }) => {
    return <ErrorRoot {...props}>{children}</ErrorRoot>
}
