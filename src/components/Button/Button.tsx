import React, { Fragment, FunctionComponent, ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
    type?: 'button' | 'reset' | 'submit'
} & ButtonHTMLAttributes<HTMLButtonElement>


export const Button: FunctionComponent<ButtonProps> = ({ type, ...props }) => (
    <Fragment>
        <button className="button" type={type} {...props}></button>

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
