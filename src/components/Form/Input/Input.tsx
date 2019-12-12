import React, { HTMLAttributes, useState, useCallback, useMemo, ChangeEvent, FocusEvent } from 'react'
import { Component } from '../../../lib'
import { Label as LabelRoot } from './Input.styled'
import { Field, FieldInput, Label, Error } from '../Form'
import { InputSkeleton } from './Input.skeleton'

export type InputProps = {
    label: string
    error?: { message?: string }
    loading?: boolean
} & HTMLAttributes<HTMLInputElement>

export const Input: Component<InputProps> = React.forwardRef(
    ({ loading, label, as, error, onChange, onFocus, onBlur, ...props }, ref) => {
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
            <Field as={as}>
                {label && (
                    <Label
                        as={LabelRoot}
                        htmlFor={props.name}
                        $active={loading || defaultActive || active}
                        $error={!!error}
                    >
                        {label}
                    </Label>
                )}
                {loading ? (
                    <InputSkeleton />
                ) : (
                    <React.Fragment>
                        <FieldInput
                            $error={!!error}
                            type="text"
                            ref={ref}
                            onFocus={handleOnFocus}
                            onChange={handleOnChange}
                            onBlur={handleOnBlur}
                            {...props}
                        />
                        <Error>{typeof error === 'object' && error.message}</Error>
                    </React.Fragment>
                )}
            </Field>
        )
    }
)
