import React, { FunctionComponent, forwardRef } from 'react'

export type CardProps = any

export const Card: FunctionComponent<CardProps> = forwardRef(({ children, className = '', ...props }, ref) => (
    <div 
        {...props}
        className={`card ${className}`}
        ref={ref}
    >{children}</div>
))
