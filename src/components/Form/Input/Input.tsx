import React, { HTMLAttributes, useState, useCallback, useEffect, ChangeEvent } from 'react'
import { Component } from '../../../lib'
import { Root, Label, InputField, Error } from './Input.styled'

export type InputProps = {
    label: string
    error?: { message?: string } | boolean
} & HTMLAttributes<HTMLInputElement>

export const Input: Component<InputProps> = React.forwardRef(({ label, as, error, ...props }, ref: any) => {
    const [active, setActive] = useState<true | false | null>(null)

    const handleOnChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value, placeholder } = event.currentTarget
            setActive(!!value || !!placeholder || !!error)
        },
        [ref]
    )

    useEffect(() => {
        const { defaultValue, value = defaultValue, placeholder } = props
        console.log({ value, placeholder, error })
        setActive(!!value || !!placeholder || !!error)
    }, [props.value, props.defaultValue, props.placeholder, error])

    return (
        <Root as={as}>
            {label && (
                <Label htmlFor={props.name} $active={active} $error={!!error}>
                    {label}
                </Label>
            )}
            <InputField $error={!!error} type="text" ref={ref} onChange={handleOnChange} {...props} />
            <Error>{typeof error === 'object' && error.message}</Error>
        </Root>
    )
})
