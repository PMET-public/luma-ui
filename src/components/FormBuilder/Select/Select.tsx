import React, { HTMLAttributes, useState, useCallback, ChangeEvent, useMemo } from 'react'
import { Component } from '../../../lib'
import { Root, Label, SelectWrapper, SelectField, CarretIcon, Error } from './Select.styled'

export type SelectProps = {
    label: string
    error?: { message?: string } | boolean
    items: Array<{ text: string } & HTMLAttributes<HTMLOptionElement>>
} & HTMLAttributes<HTMLSelectElement>

export const Select: Component<SelectProps> = React.forwardRef(({ label, items, as, error, ...props }, ref: any) => {
    const handleOnChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        const { options } = event.currentTarget
        setSelected(options[options.selectedIndex].innerText)
    }, [])

    const defaultSelected = useMemo(() => {
        const { defaultValue, value = defaultValue } = props
        const selectedOption = items.find(
            (option: HTMLAttributes<HTMLOptionElement>) => option.defaultValue === value || option.defaultChecked
        )
        return selectedOption ? selectedOption.text : ''
    }, [props.defaultValue, props.value])

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
