import React from 'react'
import { Component, classes } from '../../lib'
import Assembler, { AssemblerProps } from '../../components/Assembler'

export type HomeProps = {
    assembler: AssemblerProps
}

export const Home: Component<HomeProps> = ({ 
    as: Home = 'div', 
    assembler,
    ...props
}) => {
    
    return (
        <Home {...props} className={classes('home', props.className)}>
            <Assembler {...assembler} />
        </Home>
    )
}
