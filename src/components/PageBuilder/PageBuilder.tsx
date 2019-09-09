/**
 * ☢️ Experimental
 */

import React, { Suspense, useEffect, useState, FunctionComponent } from 'react'
import { Component } from '../../lib'
import { Root } from './PageBuilder.styled'
import { ErrorBoundary } from '../../lib'
import { htmlToProps } from './lib/parser'

export type PageBuilderProps = {
    html: string
}

type PageBuilderFactoryProps = {
    name: string
    items: Array<any>
    props: {
        [prop: string]: any
    }
}

const renderComponent = (Component: React.ComponentType<any>, props: any, items: any[]) => {
    return (
        <Component {...props}>
            {items.map((itemProps, index) => (
                <PageBuilderFactory key={index} {...itemProps} />
            ))}
        </Component>
    )
}

const PageBuilderFactory: FunctionComponent<PageBuilderFactoryProps> = ({ name, items, props }) => {
    const Component = React.lazy(() => import(`./ContentTypes/${name}/index`))

    return (
        <Suspense fallback={''}>
            <ErrorBoundary>{renderComponent(Component, props, items)}</ErrorBoundary>
        </Suspense>
    )
}

export const PageBuilder: Component<PageBuilderProps> = ({ html, ...props }) => {
    const [contentTypes, setContentTypes] = useState([])

    useEffect(() => {
        const data = htmlToProps(html)
        setContentTypes(data.items)
        console.log('🏗 PageBuilder ContentTypes', contentTypes)
    }, [html])

    return (
        <Root {...props}>
            {contentTypes.map(contentType => (
                <PageBuilderFactory {...contentType} />
            ))}
        </Root>
    )
}
