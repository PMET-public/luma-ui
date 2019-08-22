import React, { FunctionComponent, useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { Root, Wrapper, SearchIcon, Field, Count, ResetButton } from './SearchBar.styled'

import { useThrottle } from '../../hooks/useThrottle'
import IconResetSvg from '@fortawesome/fontawesome-free/svgs/solid/times-circle.svg'

export type SearchBarProps = {
    clearButton?: boolean
    count?: number
    label?: string
    value?: string
    onUpdate?: (query: string) => any
    onSearch?: (query: string) => any
}

export const SearchBar: FunctionComponent<SearchBarProps> = ({
    clearButton = true,
    count,
    label = 'Search',
    value: defaultValue = '',
    onSearch,
    onUpdate,
    ...props
}) => {
    const [value, setValue] = useState(defaultValue)

    const throttledUpdate = useThrottle(() => {
        if (onUpdate) onUpdate(value)
    }, 250)

    useEffect(throttledUpdate, [value])

    useEffect(() => setValue(defaultValue), [defaultValue])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.currentTarget.value
        setValue(query)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (onSearch && value) onSearch(value)
    }

    const handleReset = () => {
        setValue('')
    }

    return (
        <Root {...props}>
            <form onSubmit={handleSubmit}>
                <Wrapper as="label">
                    <SearchIcon />

                    <Field aria-label={label} onChange={handleChange} placeholder={label} type="text" value={value} />

                    {typeof count === 'number' && (
                        <Count>
                            {count > 999 ? '+999' : count} {count === 0 || count > 1 ? 'results' : 'result'}
                        </Count>
                    )}

                    {clearButton && value.length > 0 && (
                        <ResetButton aria-label="reset" onClick={handleReset}>
                            <IconResetSvg />
                        </ResetButton>
                    )}
                </Wrapper>
            </form>
        </Root>
    )
}
