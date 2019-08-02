import React from 'react'
import { Component, Element, Props, classes } from '../../lib'
import Assembler, { AssemblerProps } from '../../components/Assembler'

export type PageProps = Props<{
    assembler: AssemblerProps
}>

export const Page: Component<PageProps> = ({ 
    assembler,
    ...props
}) => {
    
    return (
        <Element {...props} className={classes('page', props.className)}>
            <Assembler {...assembler} />

            <style jsx global>{`
                .page {
                    padding-top: 3rem;
                }
            `}</style>
        </Element>
    )
}
