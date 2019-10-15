import React from 'react'
import { Component, Props } from '../../../lib'
import { Root, Label } from './Field.styled'

import ErrorPointerSvg from 'remixicon/icons/System/arrow-down-line.svg'
import { FieldError } from 'react-hook-form/dist/types'

export type FieldProps = {
    label?: Props<{
        text: string
    }>
    error?: boolean | string | FieldError
}

export const Field: Component<FieldProps> = ({ label = {}, error, children, ...props }) => {
    const { text, ...labelProps } = label

    return (
        <Root {...props}>
            {label.text && (
                <Label $error={!!error} {...labelProps}>
                    {text}
                    {error && <ErrorPointerSvg aria-label={error} />}
                </Label>
            )}
            {children}
        </Root>
    )
}
