import React, { AllHTMLAttributes } from 'react'
import { FunctionComponent } from 'react'
import { ReactComponentLike } from 'prop-types'

type Override<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U

/**
 * Component Types
 */
export type Props<P = {}> = Override<AllHTMLAttributes<HTMLElement>, {
    as?: ReactComponentLike | string
    hideOnBreakpoint?: 'small-screen-only' | 'medium-screen' | 'medium-screen-only' | 'large-screen' | 'large-screen-only' | 'x-large-screen'
} & P>

export type Component<P = {}> = FunctionComponent<P>

/**
 * Element Component
 */
export const Element: Component<Props> = ({ 
    as: Element = 'div',
    hideOnBreakpoint,
    children,
    ...props
}) => (
    <Element {...props} className={classes(props.className, [`element--hide-${hideOnBreakpoint}`, !!hideOnBreakpoint])}>
        {children}

        <style jsx global>{`
            .element--hide-small-screen-only {
                @media(--small-screen-only) {
                    display: none;
                }
            }  
            
            .element--hide-medium-screen {
                @media(--medium-screen) {
                    display: none;
                }
            }

            .element--hide-medium-screen-only {
                @media(--medium-screen-only) {
                    display: none;
                }
            }

            .element--hide-large-screen {
                @media(--large-screen) {
                    display: none;
                }
            }

            .element--hide-large-screen-only {
                @media(--large-screen-only) {
                    display: none;
                }
            }

            .element--hide-xlarge-screen {
                @media(--xlarge-screen) {
                    display: none;
                }
            }
        `}</style>
    </Element>
)
    
/**
 * Classes
 * @param args 
 */
export const classes = (...args: Array<string|[string, boolean]|undefined>) => {
    return args
        .map(x => {
            if (typeof x === 'string') return x
            else if (Array.isArray(x) && !!x[1]) return x[0]
            else return null
        })
        .filter(x => x !== null)
        .join(' ')
}

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
