import React from 'react'
import Skeleton from '../Skeleton'

export const ProductItemSkeleton = ({ ...props }) => {
    return (
        <Skeleton height={810} width={600} {...props} style={{ width: '100%', ...props.style }}>
            <rect x="16" y="762" rx="4" ry="4" width="60%" height="16" />
            <rect x="16" y="787" rx="4" ry="4" width="30%" height="15" />
            <rect x="0" y="0" rx="5" ry="5" width="600" height="750" />
        </Skeleton>
    )
}
