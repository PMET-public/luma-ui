import React, { FunctionComponent } from 'react'
import { Root } from './Html.styled'

export type HtmlProps = {
    source: string
}

export const Html: FunctionComponent<HtmlProps> = ({ source, ...props }) => {
    return source ? <Root {...props} dangerouslySetInnerHTML={{ __html: source }} /> : null
}
