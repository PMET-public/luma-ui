import React from 'react'
import Skeleton from '../Skeleton'

export const PriceSkeleton = ({ ...props }) => {
    return (
        <Skeleton width={190.2} height={19.1} {...props}>
            <rect width="60.3" height="19.1" />
            <rect x="63.9" width="15.4" height="19.1" />
            <rect x="84.5" width="50" height="19.1" />
            <rect x="140.2" width="50" height="19.1" />
        </Skeleton>
    )
}
