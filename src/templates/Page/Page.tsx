import React from 'react'
import { Component, Element, Props, classes } from '../../lib'
import Assembler, { AssemblerProps } from '../../components/Assembler'
import { useTheme } from '../../theme'

export type PageProps = Props<{
    assembler: AssemblerProps
}>

export const Page: Component<PageProps> = ({ 
    assembler,
    ...props
}) => {
    const { margin } = useTheme()
    
    return (
        <Element {...props} className={classes('page', props.className)}>
            <Assembler {...assembler} />
            
            <style jsx global>{`
                .page {
                    padding-top: ${margin};
                }
            `}</style>
        </Element>
    )
}
