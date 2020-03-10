import React, { Suspense, useState, useCallback } from 'react'
import { Component } from '../../lib'
import { Root, Item, NavButton, ArrowIcon, SlickGlobalStyles } from './SlickSlider.styled'
import { Settings } from 'react-slick'

const Slick = React.lazy(() => import('react-slick'))

export type SlickSliderProps = Settings

export const SlickSlider: Component<SlickSliderProps> = ({ children, ...props }) => {
    const [dragging, setDragging] = useState(false)

    const handleBeforeChange = useCallback(() => {
        setDragging(true)
    }, [setDragging])

    const handleAfterChange = useCallback(() => {
        setDragging(false)
    }, [setDragging])

    const handleOnItemClick = useCallback(
        e => {
            if (dragging) {
                e.preventDefault()
                e.stopPropagation()
            }
        },
        [dragging]
    )

    const items = React.Children.toArray(children)

    return (
        <Suspense fallback="">
            <SlickGlobalStyles />

            <Root
                as={Slick}
                respondTo="min"
                draggable
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
                    return (
                        <Item key={index}>
                            {React.cloneElement(item, { onClickCapture: handleOnItemClick, draggable: false })}
                        </Item>
                    )
                })}
            </Root>
        </Suspense>
    )
}
