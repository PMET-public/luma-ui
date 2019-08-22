import React from 'react'
import { Component } from '../../lib'
import { Root } from './Page.styled'

import Assembler, { AssemblerProps } from '../../components/Assembler'

export type PageProps = {
    assembler: AssemblerProps
}

export const Page: Component<PageProps> = ({ assembler, ...props }) => {
    return (
        <Root {...props}>
            <Assembler {...assembler} />
        </Root>
    )
}
