import React, { FunctionComponent, createContext, ReactNode, useState } from 'react'
import Image from '../Image'

export const HotSpotsContext = createContext({ active: null, set: (id: string|number|null) => {}})

export type HotSpotsProps = {
    children: ReactNode
    description: string
    image: string
}

export const HotSpots: FunctionComponent<HotSpotsProps> = ({
    children,
    description,
    image,
}) => {
    const [active, setActive] = useState()

    const set = (id?: string|number|null) => {
        setActive(id)
    }

    return (
        <HotSpotsContext.Provider value={{ active, set }}>
            <div className="hot-spots">
                <Image src={image} alt={description} />
                {children}

                <style jsx>{`
                    .hot-spots {
                        position: relative;
                    }

                    .hot-spots :global(.image) {
                        width: 100%;
                        z-index: 0;
                    }
                `}</style>
            </div>
        </HotSpotsContext.Provider>
    )
}
