import { RefObject, useEffect, useRef } from 'react'
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

export const useMeasure = (ref: RefObject<HTMLElement | null>): UseMeasure => {
    const sizes = useRef({
        height: 0,
        width: 0,
    })

    const triggerMeasure = () => {
        if (!ref.current) return
        const rect = node.getBoundingClientRect()

        sizes.current = {

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

    useResize(triggerMeasure)

    useEffect(triggerMeasure, [ref])

    return sizes.current
}
