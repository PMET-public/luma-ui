import React from 'react'
import { Component } from '../../lib'
import { Root } from './Footer.styled'
import PageBuilder, { PageBuilderProps } from '../PageBuilder'

export type FooterProps = {
    pageBuilder: PageBuilderProps
}

export const Footer: Component<FooterProps> = ({ pageBuilder, ...props }) => {
    return (
        <Root {...props}>
            <PageBuilder {...pageBuilder} />
        </Root>
    )
}
