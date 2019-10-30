import React, { AllHTMLAttributes, useState, useCallback, useMemo, ChangeEvent } from 'react'
import { Component } from '../../../lib'
import { Root, Label, SelectWrapper, SelectField, CarretIcon, Error } from './Select.styled'

export type SelectProps = {
    label: string
    error?: { message?: string } | boolean
    items: Array<{ text: string } & AllHTMLAttributes<HTMLOptionElement>>
} & AllHTMLAttributes<HTMLSelectElement>

export const Select: Component<SelectProps> = React.forwardRef(({ label, items, as, error, ...props }, ref: any) => {
    const handleOnChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const { options } = event.currentTarget
        const { label, innerText } = options[options.selectedIndex]
        setSelected(label || innerText)
    }, [])

    const defaultSelected = useMemo(() => {
        const { defaultValue } = props

        const selectedOption = items.find(
            (option: AllHTMLAttributes<HTMLOptionElement>) => option.value === defaultValue || option.defaultChecked
        )

        return selectedOption ? selectedOption.text : ''
    }, [props.defaultValue])

    const [selected, setSelected] = useState(defaultSelected)

    return (
        <Root as={as}>
            {label && (
                <Label htmlFor={props.name} $error={!!error}>
                    {label}
                </Label>
            )}

            <SelectWrapper>
                <SelectField $error={!!error}>
                    <span>{selected}</span>
                    <CarretIcon />
                </SelectField>

                <select onChange={handleOnChange} ref={ref} disabled={!items} {...props}>
                    {items &&
                        items.map(({ text, ...option }, index) => (
                            <option key={index} {...option}>
                                {text}
                            </option>
                        ))}
                </select>
            </SelectWrapper>

            <Error>{typeof error === 'object' && error.message}</Error>
        </Root>
    )
})
