import React from 'react'
import Skeleton from '../../Skeleton'

export const TextSwatchesSkeleton = ({ ...props }) => {
    return (
        <Skeleton width={518} height={86.1} {...props} style={{ width: '100%', ...props.style }}>
            <rect width="164.9" height="38.7" />
            <rect x="176.3" width="164.9" height="38.7" />
            <rect y="47.4" width="164.9" height="38.7" />
            <rect x="176.3" y="47.4" width="164.9" height="38.7" />
            <rect x="353.1" width="164.9" height="38.7" />
        </Skeleton>
    )
}
