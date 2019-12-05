import React from 'react'
import ContentLoader from 'react-content-loader'

export const HomeSkeleton = () => (
    <ContentLoader
        height={500}
        width={500}
        speed={2}
        primaryColor="rgba(204, 204, 204, 0.25)"
        secondaryColor="rgba(204, 204, 204, 0.35)"
        style={{ width: '100%', height: '100vh' }}
    >
        <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
)
