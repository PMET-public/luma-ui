import React from 'react'
import ContentLoader from 'react-content-loader'

export const MenuSkeleton = ({ count = 4 }) => (
    <ContentLoader
        height={10}
        width={100 * count}
        speed={2}
        primaryColor="rgba(204, 204, 204, 0.25)"
        secondaryColor="rgba(204, 204, 204, 0.35)"
        style={{ width: `${10 * count}rem`, height: '1.6rem' }}
    >
        {new Array(count).fill(null).map((_, index) => {
            const width = 98 / count
            const xPos = (105 / count) * index
            return <rect key={index} x={`${xPos}%`} y="0" rx={2} ry={2} width={`${width}%`} height="10" />
        })}
    </ContentLoader>
)
