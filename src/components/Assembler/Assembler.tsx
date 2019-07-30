import React, { Suspense, useEffect, useState, ReactNode } from 'react'
import { Component, Props, Element, classes, ErrorBoundary } from '../../lib'

export type AssemblerProps = Props<{
    components: Array<{
        name: string
        props: Props<any>
        hideOnBreakpoint?: 'small-screen-only' | 'medium-screen' | 'medium-screen-only' | 'large-screen' | 'large-screen-only' | 'x-large-screen'
    }>
}>

const Loading = () => {
    return (
        <div className="loading">
            Loading
        </div>
    )
}

export const Assembler: Component<AssemblerProps> = ({
    components = [],
    ...props
}) => {
    const [children, setChildren] = useState<ReactNode>(null)
    
    useEffect(() => {
        setChildren(
            <Suspense fallback={<Loading />}>
                {components.map(({ name, hideOnBreakpoint, props }, index) => {
                    const DynamicComponent = React.lazy(() => import(`../${name}`))
                    return (
                        <div className={classes('assembler__row', [`--hide-${hideOnBreakpoint}`, !!hideOnBreakpoint])} key={index}>
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
        <Element {...props} className={classes('assembler', props.className)}>
            {children}

            <style jsx global>{`
                .assembler {
                    --gap: 3rem;
                    display: grid;
                    grid-gap: var(--gap);
                    grid-auto-columns: minmax(0, 1fr);
                    grid-auto-rows: minmax(max-content, max-content);

                    @media(--medium-screen) {
                        --gap: 4rem;
                    }
                }
                .assembler__row {

                    &.--hide-small-screen-only {
                        @media(--small-screen-only) {
                            display: none;
                        }
                    }  
                    
                    &.--hide-medium-screen {
                        @media(--medium-screen) {
                            display: none;
                        }
                    }

                    &.--hide-medium-screen-only {
                        @media(--medium-screen-only) {
                            display: none;
                        }
                    }

                    &.--hide-large-screen {
                        @media(--large-screen) {
                            display: none;
                        }
                    }

                    &.--hide-large-screen-only {
                        @media(--large-screen-only) {
                            display: none;
                        }
                    }

                    &.--hide-xlarge-screen {
                        @media(--xlarge-screen) {
                            display: none;
                        }
                    }

                }
            `}</style>
        </Element>
    )
}
