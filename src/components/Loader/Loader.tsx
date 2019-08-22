import React, { FunctionComponent } from 'react'
import { Root } from './Loader.styled'

export type LoaderProps = {
    label: string
}

export const Loader: FunctionComponent<LoaderProps> = ({ label, ...props }) => {
    return (
        <Root aria-label={label} {...props}>
            <span></span>
            <span></span>
            <span></span>
        </Root>
    )
}
