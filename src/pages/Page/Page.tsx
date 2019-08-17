import React from 'react'
import { Component, Element, Props } from '../../lib'
import styles from './Page.css'

import Assembler, { AssemblerProps } from '../../components/Assembler'

export type PageProps = Props<{
    assembler: AssemblerProps
}>

export const Page: Component<PageProps> = ({ 
    assembler,
    ...props
}) => {    

    return (
        <Element className={styles.root} {...props} >
            <Assembler {...assembler} />
        </Element>
    )
}
