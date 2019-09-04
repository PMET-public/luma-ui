/**
 * ☢️ Experimental
 */

import React, { Suspense, useEffect, useState } from 'react'
import { Component } from '../../lib'
import { Root } from './PageBuilder.styled'
import { ErrorBoundary } from '../../lib'
import { htmlToProps } from './parser'

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

const PageBuilderFactory: Component<PageBuilderFactoryProps> = ({ name, items, props }) => {
    const Component = React.lazy(() => import(`./DataTypes/${name}/index`))
    return (
        <Suspense fallback={''}>
            <ErrorBoundary>{renderComponent(Component, props, items)}</ErrorBoundary>
        </Suspense>
    )
}

export const PageBuilder: Component<PageBuilderProps> = ({ html, ...props }) => {
    const [component, setComponent] = useState({ name: '', items: [], props: {} })

    useEffect(() => {
        const data = htmlToProps(html)
        const firstComponentProps = data.items[0]
        setComponent(firstComponentProps)
        console.log(firstComponentProps)
    }, [html])

    return (
        <Root {...props}>
            <PageBuilderFactory {...component} />
        </Root>
    )
}
