import React from 'react'
import { Component, Element, Props } from '../../lib'
import defaultClasses from './Page.css'

import Assembler, { AssemblerProps } from '../../components/Assembler'

export type PageProps = Props<{
    assembler: AssemblerProps
    classes?: typeof defaultClasses
}>

export const Page: Component<PageProps> = ({ 
    assembler,
    classes,
    ...props
}) => {    
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>
            <Assembler {...assembler} />
        </Element>
    )
}
