import React, { Suspense, useState, useCallback } from 'react'
import { Component } from '../../lib'
import { Root, Item, NavButton, ArrowIcon, SlickGlobalStyles } from './SlickSlider.styled'
import { Settings } from 'react-slick'

const Slick = React.lazy(() => import('react-slick'))

export type SlickSliderProps = Settings

export const SlickSlider: Component<SlickSliderProps> = ({ beforeChange, afterChange, fade = false, children, ...props }) => {
    const draggable = !fade

    const [dragging, setDragging] = useState(false)

    const handleBeforeChange = useCallback(
        (currentSlide: number, nextSlide: number) => {
            if (draggable) setDragging(true)
            if (beforeChange) beforeChange(currentSlide, nextSlide)
        },
        [draggable, setDragging]
    )

    const handleAfterChange = useCallback(
        (currentSlide: number) => {
            if (draggable) setDragging(false)
            if (afterChange) afterChange(currentSlide)
        },
        [draggable, setDragging]
    )

    const handleOnItemClick = useCallback(
        e => {
            if (draggable && dragging) {
                e.preventDefault()
                e.stopPropagation()
            }
        },
        [draggable, dragging]
    )

    const items = React.Children.toArray(children)

    return (
        <React.Fragment>
            <SlickGlobalStyles />
            <Suspense fallback="">
                {items.length > 0 ? (
                    <Root
                        $draggable={draggable}
                        as={Slick}
                        respondTo="min"
                        draggable={draggable}
                        fade={fade}
                        beforeChange={handleBeforeChange}
                        afterChange={handleAfterChange}
                        prevArrow={
                            <NavButton>
                                <ArrowIcon />
                            </NavButton>
                        }
                        nextArrow={
                            <NavButton>
                                <ArrowIcon />
                            </NavButton>
                        }
                        {...props}
                    >
                        {items.map((item: any, index) => {
                            return <Item key={index}>{React.cloneElement(item, { onClickCapture: handleOnItemClick, draggable: false })}</Item>
                        })}
                    </Root>
                ) : null}
            </Suspense>
        </React.Fragment>
    )
}
