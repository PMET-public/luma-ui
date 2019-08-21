import React from 'react'
import { Component } from '../../lib'
import { Root, Item } from './Breadcrumbs.styled'

export type BreadcrumbsProps = {
    dividor?: string
    prefix?: string
    items: Array<{
        _id?: string | number
        text: string
    }>
}

export const Breadcrumbs: Component<BreadcrumbsProps> = ({ dividor = '', items = [], prefix = '', ...props }) => {
    return (
        <Root {...props}>
            {items.map(({ text, _id, ...item }, index) => (
                <React.Fragment key={_id || index}>
                    <Item {...item}>
                        {prefix}
                        {text}
                    </Item>
                    {index < items.length - 1 && dividor}
                </React.Fragment>
            ))}
        </Root>
    )
}
