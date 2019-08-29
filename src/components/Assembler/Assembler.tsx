/**
 * ☢️ Experimental
 */

import React, { Suspense, useEffect, useState, ReactNode } from 'react'
import { Component } from '../../lib'
import { Root, Row } from './Assembler.styled'
import { ErrorBoundary } from '../../lib'

export type AssemblerProps = {
    components: Array<{
        name: string
        props: any
        hideOnBreakpoint?: 'smallOnly' | 'medium' | 'mediumOnly' | 'large' | 'largeOnly' | 'xLarge'
    }>
}

const Loading = () => {
    return <div>Loading</div>
}

export const Assembler: Component<AssemblerProps> = ({ components = [], ...props }) => {
    const [children, setChildren] = useState<ReactNode>(null)

    useEffect(() => {
        setChildren(
            <Suspense fallback={<Loading />}>
                {components.map(({ name, hideOnBreakpoint, props }, index) => {
                    const DynamicComponent = React.lazy(() => import(`../${name}/index`))
                    return (
                        <Row $hideOnBreakpoint={hideOnBreakpoint} key={index}>
                            <ErrorBoundary>
                                <DynamicComponent {...props} />
                            </ErrorBoundary>
                        </Row>
                    )
                })}
            </Suspense>
        )
    }, [components])

    return <Root {...props}>{children}</Root>
}
