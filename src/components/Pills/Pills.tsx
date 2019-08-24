import React, { FunctionComponent } from 'react'
import { Root, Wrapper, Item, ItemWrapper, Count } from './Pills.styled'

export type PillsProps = {
    items: Array<{
        _id?: string | number
        count?: string | number
        text: string
    }>
}

export const Pills: FunctionComponent<PillsProps> = ({ items, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper>
                {items.map(({ _id, text, count, ...item }, index) => (
                    <Item key={_id || index} {...item}>
                        <ItemWrapper>
                            {text}
                            {!!count && <Count>{count}</Count>}
                        </ItemWrapper>
                    </Item>
                ))}
            </Wrapper>
        </Root>
    )
}
