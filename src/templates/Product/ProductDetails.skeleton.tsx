import React from 'react'
import Skeleton from '../../components/Skeleton'

export const ProductDetailsSkeleton = ({ ...props }) => {
    return (
        <Skeleton width={523.2} height={673.4} {...props}>
            <rect width="60.3" height="19.1" />
            <rect y="26.8" width="30.2" height="19.1" />
            <rect x="37.1" y="26.8" width="62.9" height="19.1" />
            <rect y="71.6" width="47.1" height="19.1" />
            <rect y="312.4" width="40.6" height="19.1" />
            <rect x="5.2" y="345.4" width="164.9" height="38.7" />
            <rect x="181.4" y="345.4" width="164.9" height="38.7" />
            <rect x="5.2" y="392.8" width="164.9" height="38.7" />
            <rect x="5.2" y="485.6" width="518" height="49.9" />
            <rect x="5.2" y="570.7" width="500.5" height="15" />
            <rect x="5.2" y="592.3" width="194.6" height="15" />
            <rect x="14.1" y="613.2" width="213.8" height="16.4" />
            <rect x="181.4" y="392.8" width="164.9" height="38.7" />
            <rect x="358.2" y="345.4" width="164.9" height="38.7" />
            <rect x="9.3" y="111.3" width="113.4" height="141.8" />
            <rect x="140.3" y="111.3" width="113.4" height="141.8" />
            <rect x="273.2" y="111.3" width="113.4" height="141.8" />
            <rect x="63.9" width="15.4" height="19.1" />
            <rect x="84.5" width="50" height="19.1" />
            <rect x="140.2" width="50" height="19.1" />
            <circle cx="6.2" cy="621.6" r="2.1" />
            <rect x="14.1" y="635.6" width="213.8" height="16.4" />
            <circle cx="6.2" cy="644" r="2.1" />
            <rect x="14.1" y="657" width="213.8" height="16.4" />
            <circle cx="6.2" cy="665.4" r="2.1" />
        </Skeleton>
    )
}
