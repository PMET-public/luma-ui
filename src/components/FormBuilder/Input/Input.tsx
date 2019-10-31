import React, { HTMLAttributes, useState, useCallback, useMemo, ChangeEvent, FocusEvent } from 'react'
import { Component } from '../../../lib'
import { Root, InputField, Label, Error } from './Input.styled'

export type InputProps = {
    label: string
    error?: { message?: string } | boolean
} & HTMLAttributes<HTMLInputElement>

export const Input: Component<InputProps> = React.forwardRef(
    ({ label, as, error, onChange, onFocus, onBlur, ...props }, ref: any) => {
        const defaultActive = useMemo(() => {
            const { defaultValue, value = defaultValue, placeholder } = props
            return !!value || !!placeholder || !!error
        }, [props.value, props.defaultValue, props.placeholder, error])

        const [active, setActive] = useState<boolean>(defaultActive)

        const handleOnChange = useCallback(
            (event: ChangeEvent<HTMLInputElement>) => {
                const { value, placeholder } = event.currentTarget
                setActive(!!value || !!placeholder || !!error)
                if (onChange) onChange(event)
            },
            [ref, error, onChange]
        )

        const handleOnFocus = useCallback(
            (event: FocusEvent<HTMLInputElement>) => {
                setActive(true)
                if (onFocus) onFocus(event)
            },
            [onFocus]
        )

        const handleOnBlur = useCallback(
            (event: FocusEvent<HTMLInputElement>) => {
                const { value, placeholder } = event.currentTarget
                setActive(!!value || !!placeholder || !!error)
                if (onBlur) onBlur(event)
            },
            [onBlur]
        )

        return (
            <Root as={as}>
                {label && (
                    <Label htmlFor={props.name} $active={defaultActive || active} $error={!!error}>
                        {label}
                    </Label>
                )}
                <InputField
                    $error={!!error}
                    type="text"
                    ref={ref}
                    onFocus={handleOnFocus}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                    {...props}
                />
                <Error>{typeof error === 'object' && error.message}</Error>
            </Root>
        )
    }
)
