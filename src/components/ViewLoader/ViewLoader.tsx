import React, { useState, useEffect } from 'react'
import { Component, Props, Element, classes } from '../../lib'

import LoaderImage from '../../../public/images/loader.svg'
import { useTheme } from '../../theme'

export type ViewLoaderProps = Props<{ 
    text?: string
}>

export const ViewLoader: Component<ViewLoaderProps> = ({
    text = 'loading',
    ...props
}) => {
    const { colors } = useTheme()
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 250)
        return () => clearTimeout(timer)
    }, [])
    
    return show ? (
        <Element {...props} className={classes('view-loader', props.className)}>
            <LoaderImage className="view-loader__image" arial-label={text} />

            <style jsx global>{`
                .view-loader {
                    align-items: center;
                    display: flex;
                    height: 100%;
                    justify-content: center;
                    position: absolute;
                    width: 100%;
                    background-color: ${colors.surface};
                }

                .view-loader__image {
                    display: block;
                    width: 6rem;
                    height: auto;

                    animation-name: view-loader__animation;
                    animation-duration: 0.8s;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;
                }

                @keyframes view-loader__animation {
                    0% {
                        transform: rotate(0deg) scale(1);
                    }

                    50% {
                        transform: rotate(180deg) scale(1.2);
                    }
                   
                    100% {
                        transform: rotate(360deg) scale(1);
                    }
                }
            `}</style>
        </Element>
    ) : null
}
