import React from 'react'
import { Component } from '../../lib'
import { Root, Wrapper, Content, ErrorIcon, OfflineIcon, NotFoundIcon, LockIcon } from './Error.styled'

export type ErrorTypes = '500' | '404' | '401' | 'Offline'

export type ErrorProps = {
    type?: ErrorTypes
}

const Icon = (props: { type: ErrorTypes }) => {
    switch (props.type) {
        case '401':
            return <LockIcon />
        case '404':
            return <NotFoundIcon />
        case 'Offline':
            return <OfflineIcon />
        default:
            return <ErrorIcon />
    }
}

export const Error: Component<ErrorProps> = ({ type = '500', children, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper>
                <div>
                    <Icon type={type} />
                </div>
                {children && <Content>{children}</Content>}
            </Wrapper>
        </Root>
    )
}
