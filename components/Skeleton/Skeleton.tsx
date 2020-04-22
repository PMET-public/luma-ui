import React from 'react'
import { Component } from '../../lib'
import ContentLoader from 'react-content-loader'

export type SkeletonProps = {
    width: number
    height: number
}

export const Skeleton: Component<SkeletonProps> = ({ children, width, height, ...props }) => {
    return (
        <ContentLoader
            speed={1}
            backgroundColor="rgba(204, 204, 204, 0.45)"
            foregroundColor="rgba(204, 204, 204, 0.25)"
            viewBox={`0 0 ${width} ${height}`}
            {...props}
            style={{ width: `${width}px`, ...props.style }}
        >
            {children}
        </ContentLoader>
    )
}
