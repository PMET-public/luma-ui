import React, { FunctionComponent, createContext, ReactNode, useState } from 'react'
import Image from '../Image'

export const HotSpotsContext = createContext({ active: null, set: (id: string|number|null) => {}})

export type HotSpotContainerProps = {
    children: ReactNode
    description: string
    image: string
}

export const HotSpotContainer: FunctionComponent<HotSpotContainerProps> = ({
    children,
    description,
    image,
}) => {
    const [active, setActive] = useState()

    const set = (id: string|number) => {
        setActive(id)
    }

    return (
        <HotSpotsContext.Provider value={{ active, set }}>
            <div className="hot-spot-container">
                <Image className="hot-spot-container__image" src={image} alt={description} />
                {children}
            </div>
        </HotSpotsContext.Provider>
    )
}
