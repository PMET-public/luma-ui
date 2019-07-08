import { FunctionComponent, HTMLAttributes } from 'react'
import { ReactComponentLike } from 'prop-types'

export type Component<P = {}> = FunctionComponent<P & HTMLAttributes<HTMLElement> & {
    as?: ReactComponentLike
}>

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
