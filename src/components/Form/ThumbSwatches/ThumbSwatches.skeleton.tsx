import React from 'react'
import Skeleton from '../../Skeleton'

export const ThumbSwatchesSkeleton = ({ ...props }) => {
    return (
        <Skeleton width={377.4} height={141.8} {...props} style={{ width: '100%', ...props.style }}>
            <rect width="113.4" height="141.8" />
            <rect x="131.1" width="113.4" height="141.8" />
            <rect x="263.9" width="113.4" height="141.8" />
        </Skeleton>
    )
}
