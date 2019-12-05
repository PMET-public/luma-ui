import React from 'react'
import { Component } from '../../lib'
import { Root, Stories } from './Home.styled'

import BubbleCarousel, { BubbleCarouselProps } from '../../components/BubbleCarousel'
import { HomeSkeleton } from './HomeSkeleton'

export type HomeProps = {
    stories: BubbleCarouselProps
}

export const Home: Component<HomeProps> = ({ children, stories, ...props }) => {
    return (
        <Root {...props}>
            <Stories>
                <BubbleCarousel {...stories} />
            </Stories>
            {children || <HomeSkeleton />}
        </Root>
    )
}
