import React from 'react'
import { Component } from '../../lib'
import ContentLoader from 'react-content-loader'

export type SkeletonProps = {
    width: number
    height: number
}

export const Skeleton: Component<SkeletonProps> = ({ children, ...props }) => {
    return (
        <ContentLoader
            speed={1}
            primaryColor="rgba(204, 204, 204, 0.45)"
            secondaryColor="rgba(204, 204, 204, 0.25)"
            {...props}
            style={{ width: `${props.width}px`, ...props.style }}
        >
            {children}
        </ContentLoader>
    )
}
