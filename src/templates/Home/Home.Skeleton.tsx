import React from 'react'
import Skeleton from '../../components/Skeleton'

export const HomeSkeleton = ({ ...props }) => (
    <Skeleton height={500} width={500} {...props} style={{ width: '100%', height: '100vh', ...props.style }}>
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </Skeleton>
)
