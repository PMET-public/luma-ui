import React, { Suspense } from 'react'
import { Component, Props, Element, classes, ErrorBoundary } from '../../lib'

export type AssemblerProps = Props<{
    components: Array<{
        name: string
        props: any
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

    return (
        <Element {...props} className={classes('assembler')}>
            <Suspense fallback={<Loading />}>
                {components.map(({ name, props }, index) => {
                    const Component = React.lazy(() => import(`../${name}`))
                    return (
                        <React.Fragment key={index}>
                            <ErrorBoundary>
                                <Component {...props} />
                            </ErrorBoundary>
                        </React.Fragment>
                    )
                })}

                <style jsx global>{`
                    .assembler {
                        display: grid;
                        grid-gap: 4rem;
                        grid-auto-columns: minmax(0, 1fr);
                        grid-auto-rows: minmax(0, max-content);
                    }
                `}</style>
            </Suspense>
        </Element>
    )
}
