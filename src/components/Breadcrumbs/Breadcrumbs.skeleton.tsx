import React from 'react'
import Skeleton from '../Skeleton'

export const BreadcrumbsSkeleton = ({ ...props }) => {
    return (
        <Skeleton width={97.44} height={11.77} {...props}>
            <rect width="48.83" height="11.77" />
            <rect x="59" width="38.44" height="11.77" />
        </Skeleton>
    )
}
