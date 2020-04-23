import React, { useState, useRef, useCallback } from 'react'
import { Component, Props } from '../../lib'
import { Root, Group, Wrapper, List, GroupLabel, Item, Icon, Count, ToggleIcon, ToggleButton } from './Filters.styled'

import { useMeasure } from '../../hooks/useMeasure'

import CheckIconSvg from 'remixicon/icons/System/checkbox-blank-circle-fill.svg'
import CheckIconActiveSvg from 'remixicon/icons/System/checkbox-circle-fill.svg'

export type FiltersProps = {
    groups: FiltersGroupProps[]
}

export const Filters: Component<FiltersProps> = ({ groups = [], ...props }) => {
    return (
        <Root {...props}>
            {groups.map((group, index) => (
                <FiltersGroup key={index} {...group} />
            ))}
        </Root>
    )
}

type FiltersGroupProps = {
    title: string
    offset?: number
    items: Array<
        Props<{
            _id?: string | number
            active?: boolean
            count?: number
            text: string
        }>
    >
}

const FiltersGroup: Component<FiltersGroupProps> = ({ items = [], offset = 5, title, ...props }) => {
    const [open, setOpen] = useState(false)

    const handleOnToggle = useCallback(() => setOpen(!open), [open, setOpen])

    const elRef = useRef<any>(null)

    const { height } = useMeasure(elRef)

    return (
        <Group {...props}>
            <Wrapper $duration={items.length * 20 + 'ms'} $height={open ? `${height / 10}rem` : `calc(2em * ${offset})`}>
                <List ref={elRef}>
                    <GroupLabel>{title}</GroupLabel>

                    {items.map(({ text, count, active = false, _id, ...item }, index) => (
                        <dd key={_id || index}>
                            <Item $active={active} {...item}>
                                <Icon as={active ? CheckIconActiveSvg : CheckIconSvg} />

                                {text}

                                {count && <Count>{count}</Count>}
                            </Item>
                        </dd>
                    ))}
                </List>
            </Wrapper>

            {items.length > offset && (
                <div>
                    <ToggleButton $active={open} onClick={handleOnToggle}>
                        <ToggleIcon />
                        {open ? 'Less' : 'More'}
                    </ToggleButton>
                </div>
            )}
        </Group>
    )
}
