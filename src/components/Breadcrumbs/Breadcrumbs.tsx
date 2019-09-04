import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Item } from './Breadcrumbs.styled'

export type BreadcrumbsProps = {
    divider?: string
    prefix?: string
    items: Array<
        Props<{
            _id?: string | number
            text: string
        }>
    >
}

export const Breadcrumbs: Component<BreadcrumbsProps> = ({ divider = '', items = [], prefix = '', ...props }) => {
    return (
        <Root {...props}>
            {items.map(({ text, _id, ...item }, index) => (
                <React.Fragment key={_id || index}>
                    <Item {...item}>
                        {prefix}
                        {text}
                    </Item>
                    {index < items.length - 1 && divider}
                </React.Fragment>
            ))}
        </Root>
    )
}
