import React, { FunctionComponent } from 'react'
import { useTheme } from '../../theme'

export type LinkProps = any

export type LinkRoute = { [key: string]: any }

export const Link: FunctionComponent<LinkProps> = ({ ...props }) => {
    const { routerLink: RouterLink } = useTheme()
    return <RouterLink  {...props} />
}
