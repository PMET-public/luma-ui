import React from 'react'
import { Component } from '../../lib'
import { Root } from './Page.styled'

import PageBuilder, { PageBuilderProps } from '../../components/PageBuilder'

export type PageProps = {
    pageBuilder: PageBuilderProps
}

export const Page: Component<PageProps> = ({ pageBuilder, ...props }) => {
    return (
        <Root {...props}>
            <PageBuilder {...pageBuilder} />
        </Root>
    )
}
