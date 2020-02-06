import React, { InputHTMLAttributes, useState, useEffect, useCallback, useMemo, ChangeEvent, FocusEvent } from 'react'
import { Component } from '../../../lib'
import { Label as LabelRoot } from './Input.styled'
import { Field, FieldInput, Label, Error } from '../Form'
import { InputSkeleton } from './Input.skeleton'
import { ValidationOptions, useFormContext, ErrorMessage } from 'react-hook-form'
import _get from 'lodash.get'

export type InputProps = {
    label: string
    loading?: boolean
    name: string
    rules?: ValidationOptions
    error?: string
} & InputHTMLAttributes<HTMLInputElement>

export const Input: Component<InputProps> = ({
    as,
    error,
    label,
    loading,
    name,
    rules,
    onBlur,
    onChange,
    onFocus,
    ...props
}) => {
    const { register, setError, clearError, errors } = useFormContext()

    const hasError = !!error || !!_get(errors, name)

    useEffect(() => {
        if (error) {
            setError(name, 'server', error)
        } else {
            clearError(name)
        }
    }, [error])

    const defaultActive = useMemo(() => {
        const { defaultValue, value = defaultValue, placeholder } = props
        return !!value || !!placeholder || hasError
    }, [props.value, props.defaultValue, props.placeholder, hasError])

    const [active, setActive] = useState<boolean>(defaultActive)

    const handleOnChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value, placeholder } = event.currentTarget
            setActive(!!value || !!placeholder || hasError)
            if (onChange) onChange(event)
        },
        [hasError, onChange]
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
            setActive(!!value || !!placeholder || !!hasError)
            if (onBlur) onBlur(event)
        },
        [hasError, onBlur]
    )

    return (
        <Field as={as}>
            {label && (
                <Label as={LabelRoot} htmlFor={name} $active={loading || defaultActive || active} $error={hasError}>
                    {label}
                </Label>
            )}
            {loading ? (
                <InputSkeleton />
            ) : (
                <React.Fragment>
                    <FieldInput
                        key={props.defaultValue as string} // update field when defaultValue changes
                        $error={hasError}
                        type="text"
                        onFocus={handleOnFocus}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                        {...props}
                        name={name}
                        ref={register({ ...rules })}
                    />

                    <Error>
                        <ErrorMessage name={name}>{({ message }) => message}</ErrorMessage>
                    </Error>
                </React.Fragment>
            )}
        </Field>
    )
}
