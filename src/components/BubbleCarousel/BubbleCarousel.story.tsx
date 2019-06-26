import React from 'react'
import BubbleCarousel, { BubbleCarouselItem } from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/BubbleCarousel', module)
    .add('Default', () => (
        <BubbleCarousel label='Shop the Look'>
            <BubbleCarouselItem 
                image={require('../../../public/images/fashion-thumb1.jpg')}
                label="Minimalist"
            />
            <BubbleCarouselItem 
                image={require('../../../public/images/fashion-thumb2.jpg')}
                label="Dressy"
            />
            <BubbleCarouselItem 
                image={require('../../../public/images/fashion-thumb3.jpg')}
                label="Beachy"
            />
            <BubbleCarouselItem 
                image={require('../../../public/images/fashion-thumb4.jpg')}
                label="Biz Cas’"
            />
            <BubbleCarouselItem 
                image={require('../../../public/images/fashion-thumb5.jpg')}
                label="All Time"
            />
        </BubbleCarousel>
    ))
