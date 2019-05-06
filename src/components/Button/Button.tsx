import React, { Fragment, FunctionComponent, ButtonHTMLAttributes } from 'react'

export type ButtonProps = {
    type?: 'button' | 'reset' | 'submit'
} & ButtonHTMLAttributes<HTMLButtonElement>


export const Button: FunctionComponent<ButtonProps> = ({ type, ...props }) => (
    <Fragment>
        <button className="button" type={type} {...props}></button>
    </Fragment>
)
