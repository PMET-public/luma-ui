import React from 'react'
import Skeleton from '../Skeleton'

export const MenuSkeleton = ({ ...props }) => (
    <Skeleton height={13} width={400} {...props}>
        <rect x="0" y="0" width="50" height="13" />
        <rect x="70" y="0" width="50" height="13" />
        <rect x="140" y="0" width="50" height="13" />
        <rect x="210" y="0" width="50" height="13" />
        <rect x="280" y="0" width="50" height="13" />
        <rect x="350" y="0" width="50" height="13" />
    </Skeleton>
)
