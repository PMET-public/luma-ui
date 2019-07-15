import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'
import { useThrottle } from '../../hooks/useThrottle'
import Icon from '../Icon'
import IconSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconReset from '@fortawesome/fontawesome-free/svgs/solid/times-circle.svg'

export type SearchBarProps = {
    count?: number
    label?: string
    value?: string
    onUpdate?: (query: string) => any
    onSearch?: (query: string) => any
}

export const SearchBar: Component<SearchBarProps> = ({ 
    as: SearchBar = 'div', 
    count,
    label = 'Search',
    value: defaultValue = '',
    onSearch,
    onUpdate,
    ...props
}) => {
    const { colors } = useTheme()
    const [ value, setValue ] = useState(defaultValue)

    const throttledUpdate = useThrottle(() => {
        if (onUpdate) onUpdate(value)
    }, 250)

    useEffect(throttledUpdate, [value])

    useEffect(() => setValue (defaultValue), [defaultValue])
        
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
        <SearchBar {...props} className={classes('search-bar', props.className)}>
            <form onSubmit={handleSubmit}>
                <label className="search-bar__wrapper">
                    <Icon className="search-bar__icon"
                        as="span" 
                        aria-hidden
                    >
                        <IconSearch />
                    </Icon>

                    <input className="search-bar__field"
                        aria-label={label} 
                        onChange={handleChange}
                        placeholder={label}
                        type="text"
                        value={value}
                    />
                    
                    <span className="search-bar__count">
                        {typeof count === 'number' && (
                            <React.Fragment>
                                {count > 999 ? '+999' : count} {count === 0 || count > 1 ? 'results' : 'result'}
                            </React.Fragment>
                        )}
                    </span>

                    <Icon className="search-bar__reset"
                        aria-label="reset"
                        as="button" 
                        onClick={handleReset}
                    >
                        <IconReset />
                    </Icon>
                </label>
            </form>

            <style jsx global>{`
                .search-bar__wrapper {
                    --opacity: 0.5;

                    align-items: center;
                    background-color: ${colors.surface};
                    border-radius: 0.5rem;
                    color: ${colors.onSurface};
                    display: grid;
                    grid-gap: 1rem;
                    grid-template-columns: auto 1fr auto auto;
                    padding: 1.6rem;
                    width: 100%;

                    &:hover, &:focus-within {
                        --opacity: 1;
                    }
                }

                .search-bar__icon {           
                    transition: opacity 305ms ease;         
                    opacity: var(--opacity);
                }

                .search-bar__field {   
                    appearance: none;
                    background-color: inherit;
                    border: 0 none;
                    color: inherit;
                    font-size: 1.6rem;
                    font-weight: 600;
                    width: 100%;

                    &:focus {
                        outline: none;
                        box-shadow: none;
                    }
                }

                .search-bar__count {
                    font-size: 1.4rem;
                    white-space: nowrap;
                    opacity: var(--opacity);
                    transition: opacity 305ms ease;         

                }

                .search-bar__reset {
                    opacity: var(--opacity);
                    transition: opacity 305ms ease;         

                }

            `}</style>
        </SearchBar>
    )
}

// box-shadow: 0 0 0.2rem ${colors.onSurface.fade(0.75)};
