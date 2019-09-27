/**
 * ☢️ Experimental
 */

import React, { Suspense, useMemo, useEffect, useState } from 'react'
import { Component } from '../../lib'
import { Root, RichText } from './PageBuilder.styled'
import { ErrorBoundary } from '../../lib'
import { htmlToProps } from './lib/parser'
import { isPageBuilderHtml } from './lib/utils'

export type PageBuilderProps = {
    html: string
}

type PageBuilderFactoryProps = {
    component: Component
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

const PageBuilderFactory: Component<PageBuilderFactoryProps> = ({ component, items, props }) => {
    return component ? (
        <Suspense fallback>
            <ErrorBoundary>{renderComponent(component, props, items)}</ErrorBoundary>
        </Suspense>
    ) : null
}

export const PageBuilder: Component<PageBuilderProps> = ({ html, ...props }) => {
    const [items, setItems] = useState<any[] | null>(null)

    useEffect(() => {
        if (isPageBuilderHtml(html)) setItems(htmlToProps(html).items)
    }, [])

    return useMemo(() => {
        // const { items } = htmlToProps(html) as PageBuilderFactoryProps

        return (
            <Root {...props}>
                {items ? (
                    items.map((contentType, index) => <PageBuilderFactory key={index} {...contentType} />)
                ) : (
                    <RichText dangerouslySetInnerHTML={{ __html: html }} />
                )}
            </Root>
        )
    }, [items])
}
