import React, { FunctionComponent, forwardRef, DetailedHTMLProps, HTMLAttributes } from 'react'
import { mergeString } from '../../../src/lib/helpers'

export type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Card: FunctionComponent<CardProps> = forwardRef(({ children, className, ...props }, ref) => (
    <div 
        {...props}
        className={mergeString('card', className)}
        ref={ref}
    >{children}</div>
))
