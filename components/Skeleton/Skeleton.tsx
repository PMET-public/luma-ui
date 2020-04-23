import React from 'react'
import { Component } from '../../lib'
import ContentLoader from 'react-content-loader'

export type SkeletonProps = {
    width?: number | string
    height?: number | string
}

export const Skeleton: Component<SkeletonProps> = ({ children, width, height, ...props }) => {
    return (
        <ContentLoader
            speed={1}
            backgroundColor="rgba(204, 204, 204, 0.45)"
            foregroundColor="rgba(204, 204, 204, 0.25)"
            viewBox={width && height ? `0 0 ${width} ${height}` : undefined}
            {...props}
            style={{ width, height, ...props.style }}
        >
            {children}
        </ContentLoader>
    )
}
