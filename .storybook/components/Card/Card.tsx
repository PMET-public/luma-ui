import React, { FunctionComponent, forwardRef, DetailedHTMLProps, HTMLAttributes } from 'react'

export type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Card: FunctionComponent<CardProps> = forwardRef(({ children, className, ...props }, ref) => (
    <div 
        className="card"
        {...props}
        ref={ref}
    >
        {children}

        <style jsx global>{`
            .card {
                border-radius: 1rem;
                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.35);
                box-sizing: border-box;
                padding: 10px;
            }
        `}</style>
    </div>
))
