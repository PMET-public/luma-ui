import React, { FunctionComponent, useState, useEffect } from 'react'
import { Root, LoaderImage } from './ViewLoader.styled'

export type ViewLoaderProps = {
    text?: string
}

export const ViewLoader: FunctionComponent<ViewLoaderProps> = ({ text = 'loading', ...props }) => {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 250)
        return () => clearTimeout(timer)
    }, [])

    return show ? (
        <Root {...props}>
            <LoaderImage arial-label={text} />
        </Root>
    ) : null
}
