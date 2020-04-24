import React from 'react'
import Skeleton from '../../Skeleton'

export const InputSkeleton = () => {
    return (
        <Skeleton width={167.3} height={35} preserveAspectRatio="xMinYMid slice" style={{ width: '100%' }}>
            <rect width="100%" height="100%" />
        </Skeleton>
    )
}
