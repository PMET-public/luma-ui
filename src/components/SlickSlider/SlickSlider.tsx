import React from 'react'
import { Component } from '../../lib'
import { Root, Item, NavButton, ArrowIcon, SlickGlobalStyles, SlickGlobalThemeSyles } from './SlickSlider.styled'
import Slick, { Settings } from 'react-slick'

export type SlickSliderProps = Settings & {
    gap?: number
}

export const SlickSlider: Component<SlickSliderProps> = ({ gap, children, ...props }) => {
    return (
        <React.Fragment>
            <SlickGlobalStyles />
            <SlickGlobalThemeSyles />
            <Root
                as={Slick}
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
                {React.Children.map(children, child => (
                    <Item $gap={gap}>{child}</Item>
                ))}
            </Root>
        </React.Fragment>
    )
}
