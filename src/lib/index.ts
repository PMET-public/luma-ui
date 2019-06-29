import { FunctionComponent, HTMLAttributes } from 'react'
import { ReactComponentLike } from 'prop-types'

export type Component<P = {}> = FunctionComponent<P & {
    as?: ReactComponentLike
} & HTMLAttributes<HTMLElement>>

export const classes = (...args: Array<string|undefined>) => args.filter(x => typeof x === 'string').join(' ')
