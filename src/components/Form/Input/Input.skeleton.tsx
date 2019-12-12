import React from 'react'
import Skeleton from '../../Skeleton'

export const InputSkeleton = ({ ...props }) => {
    return (
        <Skeleton width={167.3} height={59.4} {...props} style={{ width: '100%', height: 59.4, ...props.style }}>
            <rect width="167.3" height="34.4" />
        </Skeleton>
    )
}
