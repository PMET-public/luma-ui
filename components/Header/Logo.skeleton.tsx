import React from 'react'
import Skeleton from '../Skeleton'

export const LogoSkeleton = ({ ...props }) => (
    <Skeleton height={30} width={100} {...props}>
        <rect x="0" y="0" width="100%" height="100%" />
    </Skeleton>
)
