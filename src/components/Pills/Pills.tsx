import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, Item, ItemWrapper, Count } from './Pills.styled'
import { PillSkeleton } from './Pills.skeleton'

export type PillsProps = {
    loading?: boolean
    items: Array<
        Props<{
            _id?: string | number
            count?: string | number
            text: string
        }>
    >
}

export const Pills: Component<PillsProps> = ({ loading, items, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper>
                {loading ? (
                    <PillSkeleton />
                ) : (
                    items.map(({ _id, text, count, ...item }, index) => (
                        <Item key={_id || index} {...item}>
                            <ItemWrapper>
                                {text}
                                {!!count && <Count>{count}</Count>}
                            </ItemWrapper>
                        </Item>
                    ))
                )}
            </Wrapper>
        </Root>
    )
}
