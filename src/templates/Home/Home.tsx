import React from 'react'
import { Component } from '../../lib'
import { Root, Stories } from './Home.styled'

import BubbleCarousel, { BubbleCarouselProps } from '../../components/BubbleCarousel'
import { HomeSkeleton } from './Home.skeleton'

export type HomeProps = {
    loading?: boolean
    stories: BubbleCarouselProps
}

export const Home: Component<HomeProps> = ({ loading, stories, children, ...props }) => {
    return (
        <Root {...props}>
            <Stories>
                <BubbleCarousel loading={loading} {...stories} />
            </Stories>
            {loading ? <HomeSkeleton /> : children}
        </Root>
    )
}
