import React from 'react'
import ContentLoader from 'react-content-loader'

export const BubbleCarouselSkeleton = () => (
    <ContentLoader
        height={110}
        width={90}
        speed={2}
        primaryColor="rgba(204, 204, 204, 0.25)"
        secondaryColor="rgba(204, 204, 204, 0.35)"
        style={{ width: '9rem' }}
    >
        <circle cx="45" cy="45" r="45" />
        <rect x="10" y="98" rx="2" ry="2" width="70" height="12" />
    </ContentLoader>
)
