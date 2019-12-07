import React from 'react'
import Skeleton from '../Skeleton'

export const CartListSkeleton = ({ ...props }) => {
    return (
        <Skeleton width={400} height={320} {...props} style={{ width: '100%', maxWidth: '60rem', ...props.style }}>
            <rect y="172.7" width="118" height="146.4" />
            <rect x="130.4" y="180.9" width="48.5" height="11.9" />
            <rect x="129.2" y="242.7" width="48.5" height="11.9" />
            <rect x="186.7" y="238.4" width="26.7" height="20.5" />
            <rect x="219.8" y="238.4" width="26.7" height="20.5" />
            <rect x="130.4" y="199.5" width="55.8" height="11.9" />
            <rect x="130.4" y="218" width="27.9" height="11.9" />
            <rect x="164.9" y="218" width="47.7" height="11.9" />
            <rect y="158.8" width="100%" height="1.1" />
            <rect width="118" height="146.4" />
            <rect x="130.4" y="8.2" width="48.5" height="11.9" />
            <rect x="129.2" y="70" width="48.5" height="11.9" />
            <rect x="186.7" y="65.7" width="26.7" height="20.5" />
            <rect x="219.8" y="65.7" width="26.7" height="20.5" />
            <rect x="130.4" y="26.8" width="55.8" height="11.9" />
            <rect x="130.4" y="45.4" width="27.9" height="11.9" />
            <rect x="164.9" y="45.4" width="47.7" height="11.9" />
        </Skeleton>
    )
}
