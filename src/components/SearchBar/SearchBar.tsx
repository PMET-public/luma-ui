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
                    
                    <span className="search-bar__reset">
                        {value.length > 0 && (
                            <Icon 
                                aria-label="reset"
                                as={props => <button type="reset" {...props} />} 
                                onClick={handleReset}
                            >
                                <IconReset />
                            </Icon>
                        )}   
                    </span>
                </label>
            </form>

            <style jsx global>{`
                .search-bar {
                    --opacity: 0.64;
                    background-color: ${colors.onSurface.fade(0.95)};
                    border-radius: 1rem;
                    color: ${colors.onSurface};

                    &:hover,
                    &:focus-within {
                        --opacity: 1;
                    }
                }

                .search-bar__wrapper {
                    align-items: center;
                    display: grid;
                    grid-gap: 1rem;
                    grid-template-columns: auto 1fr auto auto;
                    padding: 1em;
                    width: 100%;
                }

                .search-bar__icon {           
                    font-size: 1.1sem;
                }

                .search-bar__field {   
                    appearance: none;
                    background-color: inherit;
                    border: 0 none;
                    color: inherit;
                    font-size: inherit;
                    font-weight: 600;
                    width: 100%;
                }

                .search-bar__count {
                    font-size: 0.8em;
                    opacity: var(--opacity);
                    transition: opacity 305ms ease;
                    white-space: nowrap;
                }

                .search-bar__reset {
                    font-size: 1.6rem;    
                    opacity: var(--opacity);
                    transition: opacity 305ms ease;
                }

            `}</style>
        </SearchBar>
    )
}
