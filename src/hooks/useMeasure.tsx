import { RefObject, useEffect, useState } from 'react'
import { useResize } from './useResize'

type UseMeasure = {
    bottom: number
    height: number
    left: number
    right: number
    top: number
    width: number
    x: number
    y: number
}

const getValues = (node: HTMLElement): UseMeasure => {
    const rect = node.getBoundingClientRect()

    return {
        width: rect.width,
        height: rect.height,
        top: "x" in rect ? rect.x : rect.top,
        left: "y" in rect ? rect.y : rect.left,
        x: "x" in rect ? rect.x : rect.left,
        y: "y" in rect ? rect.y : rect.top,
        right: rect.right,
        bottom: rect.bottom,
    }
}

export const useMeasure = (ref: RefObject<HTMLElement | null>): UseMeasure => {
    const [values, setValues] = useState<UseMeasure>(getValues(document.createElement('div')))

    const triggerMeasure = () => {
        if (!ref.current) return
        setValues(getValues(ref.current))
    }
 
    useResize(triggerMeasure)

    useEffect(triggerMeasure, [ref])

    return values
}
