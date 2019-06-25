import React from 'react'
import BubbleCarousel, { BubbleCarouselItem } from '.'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/dist/react'

storiesOf('📦 Components/BubbleCarousel', module)
    .addDecorator(centered)
    .add('Default', () => (
        <BubbleCarousel label='Shop the Look'>
            <BubbleCarouselItem 
                image="https://lorempixel.com/800/600/fashion/1"
                label="Minimalist"
            />
            <BubbleCarouselItem 
                image="https://lorempixel.com/800/600/fashion/1"
                label="Something Else"
            />
            <BubbleCarouselItem 
                image="https://lorempixel.com/800/600/fashion/1"
                label="And more"
            />
        </BubbleCarousel>
    ))
