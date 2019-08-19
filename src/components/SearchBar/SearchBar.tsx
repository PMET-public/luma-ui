import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './SearchBar.css'

import useStyles from 'isomorphic-style-loader/useStyles'
import { useThrottle } from '../../hooks/useThrottle'

import Icon from '../Icon'

import IconSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconReset from '@fortawesome/fontawesome-free/svgs/solid/times-circle.svg'

export type SearchBarProps = Props<{
    clearButton?: boolean
    count?: number
    label?: string
    value?: string
    onUpdate?: (query: string) => any
    onSearch?: (query: string) => any
}>

export const SearchBar: Component<SearchBarProps> = ({
    clearButton = true,
    count,
    label = 'Search',
    value: defaultValue = '',
    onSearch,
    onUpdate,
    ...props
}) => {
    useStyles(styles)

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
        <Element className={styles.root} {...props}>
            <form onSubmit={handleSubmit}>
                <label className={styles.wrapper}>
                    <Icon   
                        as="span"
                        aria-hidden
                        className={styles.icon}
                    >
                        <IconSearch />
                    </Icon>

                    <input 
                        aria-label={label}
                        className={styles.field}
                        onChange={handleChange}
                        placeholder={label}
                        type="text"
                        value={value}
                    />

                    {typeof count === 'number' && (
                        <span className={styles.count}>
                            {count > 999 ? '+999' : count} {count === 0 || count > 1 ? 'results' : 'result'}
                        </span>
                    )}

                    {clearButton && value.length > 0 && (
                        <span className={styles.reset}>
                            <Icon
                                aria-label="reset"
                                as={props => <button type="reset" {...props} />}
                                onClick={handleReset}
                            >
                                <IconReset />
                            </Icon>
                        </span>
                    )}
                </label>
            </form>
        </Element>
    )
}
