import React from 'react'
import { Component, Props } from '../../lib'
import { Root, ItemWrapper, Item } from './Breadcrumbs.styled'
import { BreadcrumbsSkeleton } from './Breadcrumbs.skeleton'

export type BreadcrumbsProps = {
    loading?: boolean
    divider?: string
    prefix?: string
    items: Array<
        Props<{
            _id?: string | number
            text: string
        }>
    >
}

export const Breadcrumbs: Component<BreadcrumbsProps> = ({ loading, divider = '', items = [], prefix = '', ...props }) => {
    return (
        <Root {...props}>
            {loading ? (
                <BreadcrumbsSkeleton />
            ) : (
                items.map(({ text, _id, ...item }, index) => (
                    <React.Fragment key={_id || index}>
                        <ItemWrapper>
                            <Item {...item}>
                                {prefix}
                                {text}
                            </Item>
                        </ItemWrapper>
                        {index < items.length - 1 && divider}
                    </React.Fragment>
                ))
            )}
        </Root>
    )
}
