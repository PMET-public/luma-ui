import { RefObject, useEffect, useState } from 'react'

type UseMeasure = {
    bottom: number
    height: number
    left: number
    right: number
    top: number
    width: number
    x: number
    y: number
    offsetX: number
    offsetY: number
}

const getValues = (node: HTMLElement): UseMeasure => {
    const rect = node.getBoundingClientRect()

    return {
        width: rect.width,
        height: rect.height,
        top: rect.x ? rect.x : rect.top,
        left: rect.y ? rect.y : rect.left,
        x: rect.x ? rect.x : rect.left,
        y: rect.y ? rect.y : rect.top,
        right: rect.right,
        bottom: rect.bottom,
        offsetX: rect.left + window.scrollX,
        offsetY: rect.top + window.scrollY,
    }
}

export const useMeasure = (ref: RefObject<HTMLElement | null>): UseMeasure => {
    const [values, setValues] = useState<UseMeasure>({
        bottom: 0,
        height: 0,
        left: 0,
        right: 0,
        top: 0,
        width: 0,
        x: 0,
        y: 0,
        offsetX: 0,
        offsetY: 0,
    })

    useEffect(() => {
        if (!ref || !ref.current) return
        setValues(getValues(ref.current))
    }, [ref?.current])

    return values
}
