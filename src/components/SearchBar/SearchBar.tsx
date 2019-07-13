import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'
import { useThrottle } from '../../hooks/useThrottle'

export type SearchBarProps = {
    label?: string
    value?: string
    onUpdate?: (query: string) => any
    onSearch?: (query: string) => any
}

export const SearchBar: Component<SearchBarProps> = ({ 
    as: SearchBar = 'div', 
    label = 'Search',
    value: defaultValue = 'ss',
    onSearch,
    onUpdate,
    ...props
}) => {
    const { colors } = useTheme()
    const [ value, setValue ] = useState(defaultValue)
    const throttledUpdate = useThrottle(() => onUpdate && onUpdate(value), 1500, true)

    const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
        const query = event.currentTarget.value
        setValue(query)
        if (onUpdate && value.length > 2) throttledUpdate()
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        if (onSearch) onSearch(value)
    }
    
    return (
        <SearchBar {...props} className={classes('search-bar', props.className)}>
            <form onSubmit={handleSubmit}>
                <input className="search-bar__field"
                    aria-label={label} 
                    placeholder={label}
                    type="search"
                    value={value}
                    onChange={handleUpdate}
                />
            </form>

            <style jsx global>{`
                .search-bar {
                    width: 100%;
                }
                .search-bar__field {
                    background-color: ${colors.surface};
                    color: ${colors.onSurface};
                    font-size: 1.6rem;
                    font-weight: 600;
                    padding: 1.5rem 2rem;
                    width: 100%;
                    border: 0 none;
                    border-radius: 3rem;
                    appearance: none;

                    &::-webkit-search-cancel-button {
                        appearance: none;
                         /* Now your own custom styles */
                        height: 14px;
                        width: 14px;
                        display: block;
                        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAn0lEQVR42u3UMQrDMBBEUZ9WfQqDmm22EaTyjRMHAlM5K+Y7lb0wnUZPIKHlnutOa+25Z4D++MRBX98MD1V/trSppLKHqj9TTBWKcoUqffbUcbBBEhTjBOV4ja4l4OIAZThEOV6jHO8ARXD+gPPvKMABinGOrnu6gTNUawrcQKNCAQ7QeTxORzle3+sDfjJpPCqhJh7GixZq4rHcc9l5A9qZ+WeBhgEuAAAAAElFTkSuQmCC);
                        /* setup all the background tweaks for our custom icon */
                        background-repeat: no-repeat;

                        /* icon size */
                        background-size: 14px;
                    }
                }
            `}</style>
        </SearchBar>
    )
}
