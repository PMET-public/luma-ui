import React from 'react'
import { Skeleton } from '../Skeleton'

export const PillSkeleton = ({ ...props }) => {
    return (
        <Skeleton width={400.34} height={32.91} {...props}>
            <rect rx="3" width="75.44" height="32.91" />
            <rect x="86.95" rx="6" width="110.14" height="32.91" />
            <rect x="207.22" rx="6" width="193.12" height="32.91" />
        </Skeleton>
    )
}
