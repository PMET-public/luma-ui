import React from 'react'
import Skeleton from '../Skeleton'

export const BubbleCarouselSkeleton = ({ ...props }) => (
    <Skeleton height={110.53} width={406} {...props}>
        <circle cx="44.55" cy="44.55" r="44.55" />
        <rect x="7.18" y="101.25" width="74.74" height="9.28" />
        <circle cx="149.71" cy="44.55" r="44.55" />
        <rect x="112.34" y="101.25" width="74.74" height="9.28" />
        <circle cx="254.86" cy="44.55" r="44.55" />
        <rect x="217.49" y="101.25" width="74.74" height="9.28" />
        <circle cx="360.02" cy="44.55" r="44.55" />
        <rect x="322.65" y="101.25" width="74.74" height="9.28" />
    </Skeleton>
)
