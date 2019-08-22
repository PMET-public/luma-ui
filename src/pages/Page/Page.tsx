import React, { FunctionComponent } from 'react'
import { Root } from './Page.styled'

import Assembler, { AssemblerProps } from '../../components/Assembler'

export type PageProps = {
    assembler: AssemblerProps
}

export const Page: FunctionComponent<PageProps> = ({ assembler, ...props }) => {
    return (
        <Root {...props}>
            <Assembler {...assembler} />
        </Root>
    )
}
