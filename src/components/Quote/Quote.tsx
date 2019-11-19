import React from 'react'
import { Component } from '../../lib'
import { Root, BlockQuote, Author, Description } from './Quote.styled'

export type QuoteProps = {
    quote: string
    author?: string
    description?: string
}

export const Quote: Component<QuoteProps> = ({ quote, author, description, ...props }) => {
    return (
        <Root {...props}>
            <BlockQuote>{quote}</BlockQuote>
            {author && <Author>{author}</Author>}
            {description && <Description>{description}</Description>}
        </Root>
    )
}
