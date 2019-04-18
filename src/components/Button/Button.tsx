import React, { Fragment, FunctionComponent, ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export type ButtonProps = {} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button: FunctionComponent<ButtonProps> = ({ children, type = 'button', ...props }) => (
    <Fragment>
        <button className="button" type={type} {...props}>
            {children}
        </button>

        <style jsx>{`
            .button {
                background: var(--color-primary, #ccc);
                border: 0 none;
                border-radius: .4rem;
                padding: 1rem;
                font-size: 1.2rem;
            }
        `}</style>
    </Fragment>
)