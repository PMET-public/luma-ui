import React from 'react'

import { toast as _toast } from 'react-toastify'

export const toast = _toast

/**
 * Error Boundary
 */
export class ErrorBoundary extends React.Component<any, { hasError: boolean }> {
    constructor(props: any) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    // componentDidCatch(error) {
    //     // You can also log the error to an error reporting service
    // }

    render() {
        if (this.state.hasError) {
            return null
        }

        return this.props.children
    }
}

/**
 * Components Types
 */
export type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

export type Props<P = {}> = {
    [key: string]: any
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
} & P

export type Component<P = {}> = React.FunctionComponent<Props<P>>

/**
 * To camelCase
 */

export const toCamelCase = (string: string) =>
    string.replace(/-([a-z])/g, g => {
        return g[1].toUpperCase()
    })

/**
 * To PascalCalse
 */

export const toPascalCase = (string: string) => {
    const camelCased = toCamelCase(string)
    return camelCased.charAt(0).toUpperCase() + camelCased.slice(1)
}

/**
 * Merge Refs
 * 🍻 https://github.com/smooth-code/react-merge-refs/
 */
export const mergeRefs = (refs: any[]) => {
    return (value: any) => {
        refs.forEach(ref => {
            if (typeof ref === 'function') {
                ref(value)
            } else if (ref) {
                ref.current = value
            }
        })
    }
}
