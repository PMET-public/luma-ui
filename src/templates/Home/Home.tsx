import React from 'react'
import { Component } from '../../lib'
import { Root, Stories } from './Home.styled'

import PageBuilder, { PageBuilderProps } from '../../components/PageBuilder'
import BubbleCarousel, { BubbleCarouselProps } from '../../components/BubbleCarousel'

export type HomeProps = {
    stories: BubbleCarouselProps
    pageBuilder: PageBuilderProps
}

export const Home: Component<HomeProps> = ({ stories, pageBuilder, ...props }) => {
    return (
        <Root {...props}>
            <Stories>
                <BubbleCarousel {...stories} />
            </Stories>
            <PageBuilder {...pageBuilder} />
        </Root>
    )
}
