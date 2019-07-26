import React, { Suspense, useEffect, useState, ReactNode } from 'react'
import { Component, Props, Element, classes, ErrorBoundary } from '../../lib'

export type AssemblerProps = Props<{
    components: Array<{
        name: string
        props: Props<any>
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
                {components.map(({ name, props }, index) => {
                    const DynamicComponent = React.lazy(() => import(`../${name}`))
                    return (
                        <React.Fragment key={index}>
                            <ErrorBoundary>
                                <DynamicComponent {...props} />
                            </ErrorBoundary>
                        </React.Fragment>
                    )
                })}
            </Suspense>
        )
    }, [components])
    return (
        <Element {...props} className={classes('assembler')}>
            {children}

            <style jsx global>{`
                .assembler {
                    --gap: 3rem;
                    display: grid;
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                    grid-gap: var(--gap);
                    grid-auto-columns: minmax(0, 1fr);
                    grid-auto-rows: minmax(max-content, max-content);

                    @media(--medium-screen) {
                        --gap: 4rem;
                    }
                }
            `}</style>
        </Element>
    )
}
