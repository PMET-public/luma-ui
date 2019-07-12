import React from 'react'
import { Component, classes } from '../../lib'

export type ContainerProps = {

}

export const Container: Component<ContainerProps> = ({ 
    as: Container = 'div',
    children, 
    ...props
}) => {
    
    return (
        <Container {...props} className={classes('container', props.className)}>
           {children}

            <style jsx global>{`
                .container {
                    margin: 0 auto;
                    max-width: 1800px;
                    padding: 0 1.6rem;
                    width: 100%;
                }
            `}</style>
        </Container>
    )
}
