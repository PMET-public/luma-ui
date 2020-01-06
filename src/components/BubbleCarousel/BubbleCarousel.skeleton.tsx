import React from 'react'
import Skeleton from '../Skeleton'

export const BubbleCarouselSkeleton = ({ ...props }) => (
    <Skeleton height={112} width={90} {...props}>
        <circle cx="44.55" cy="44.55" r="44.55" />
        <rect x="7.18" y="101.25" width="74.74" height="9.28" />
    </Skeleton>
)
