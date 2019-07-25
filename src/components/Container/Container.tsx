import React from 'react'
import { Component, Props, Element, classes } from '../../lib'

export type ContainerProps = Props<{ }>

export const Container: Component<ContainerProps> = ({ 
    children, 
    ...props
}) => {
    
    return (
        <Element {...props} className={classes('container', props.className)}>
           {children}

            <style jsx global>{`
                .container {
                    margin: 0 auto;
                    max-width: 1800px;
                    padding: 0 1.5rem;
                    width: 100%;
                }
            `}</style>
        </Element>
    )
}
