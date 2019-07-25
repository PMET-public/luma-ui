import React from 'react'
import { Component, Element, Props, classes } from '../../lib'
import Assembler, { AssemblerProps } from '../../components/Assembler'

export type HomeProps = Props<{
    assembler: AssemblerProps
}>

export const Home: Component<HomeProps> = ({ 
    assembler,
    ...props
}) => {
    
    return (
        <Element {...props} className={classes('home', props.className)}>
            <Assembler {...assembler} />
        </Element>
    )
}
