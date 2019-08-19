import React, { Suspense, useEffect, useState, ReactNode } from 'react'
import { Component, Props, Element, classNames, ErrorBoundary } from '../../lib'
import styles from './Assembler.css'

import useStyles from 'isomorphic-style-loader/useStyles'

export type AssemblerProps = Props<{
    components: Array<{
        name: string
        props: Props<any>
        hideOnBreakpoint?: 'smallScreenOnly' | 'mediumScreen' | 'mediumScreenOnly' | 'largeScreen' | 'largeScreenOnly' | 'xLargeScreen'
    }>
}>

const Loading = () => {
    return (
        <div>Loading</div>
    )
}

export const Assembler: Component<AssemblerProps> = ({
    components = [],
    ...props
}) => {
    useStyles(styles)
    
    const [children, setChildren] = useState<ReactNode>(null)
    
    useEffect(() => {
        setChildren(
            <Suspense fallback={<Loading />}>
                {components.map(({ name, hideOnBreakpoint, props }, index) => {
                    const DynamicComponent = React.lazy(() => import(`../${name}/index`))
                    return (
                        <div 
                            className={classNames(
                                styles.row, 
                                [`hideOn${hideOnBreakpoint}`, !!hideOnBreakpoint]
                            )} 
                            key={index}
                        >
                            <ErrorBoundary>
                                <DynamicComponent {...props} />
                            </ErrorBoundary>
                        </div>
                    )
                })}
            </Suspense>
        )
    }, [components])
    
    return (
        <Element className={styles.root} {...props}>
            {children}
        </Element>
    )
}
