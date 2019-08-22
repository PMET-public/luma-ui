import React, { FunctionComponent, useState, useRef } from 'react'
import {
    Root,
    Group,
    Wrapper,
    List,
    GroupLabel,
    Item,
    CheckIcon,
    CheckedIcon,
    Count,
    ToggleIcon,
    ToggleButton,
} from './Filters.styled'

import { useMeasure } from '../../hooks/useMeasure'

export type FiltersProps = {
    groups: FiltersGroupProps[]
}

export const Filters: FunctionComponent<FiltersProps> = ({ groups = [], ...props }) => {
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
    items: Array<{
        _id?: string | number
        active?: boolean
        count?: number
        text: string
    }>
}

const FiltersGroup: FunctionComponent<FiltersGroupProps> = ({ items = [], offset = 5, title, ...props }) => {
    const [open, setOpen] = useState(false)

    const elRef = useRef<any>(null)

    const { height } = useMeasure(elRef)

    const triggerToggle = () => setOpen(!open)

    return (
        <Group {...props}>
            <Wrapper
                duration={items.length * 20 + 'ms'}
                height={open ? `${height / 10}rem` : `calc(2.2em * ${offset})`}
            >
                <List ref={elRef}>
                    <GroupLabel>{title}</GroupLabel>

                    {items.map(({ text, count, active = false, _id, ...item }, index) => (
                        <dd key={_id || index}>
                            <Item {...item}>
                                {active ? <CheckedIcon active={active} /> : <CheckIcon />}

                                {text}

                                {count && <Count>{count}</Count>}
                            </Item>
                        </dd>
                    ))}
                </List>
            </Wrapper>

            {items.length > offset && (
                <div>
                    <ToggleButton onClick={triggerToggle}>
                        <ToggleIcon active={open} />
                        {open ? 'Less' : 'More'}
                    </ToggleButton>
                </div>
            )}
        </Group>
    )
}
