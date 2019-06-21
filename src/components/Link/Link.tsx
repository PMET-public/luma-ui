import React, { useContext } from 'react'
import { ThemeContext } from '../../theme'

export type LinkProps = any

export const Link = (props: any) => { 
    const { value: { routerLink: RouterLink } } = useContext(ThemeContext)
    return <RouterLink {...props} />
}
