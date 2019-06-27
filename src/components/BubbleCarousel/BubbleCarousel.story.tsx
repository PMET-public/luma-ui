import React from 'react'
import BubbleCarousel from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/BubbleCarousel', module)
    .add('Default', () => (
        <BubbleCarousel label='Shop the Look'>
            <BubbleCarousel.Item 
                image={require('../../../public/images/fashion-thumb1.jpg')}
                label="Minimalist"
            />
            <BubbleCarousel.Item 
                image={require('../../../public/images/fashion-thumb2.jpg')}
                label="Dressy"
            />
            <BubbleCarousel.Item 
                image={require('../../../public/images/fashion-thumb3.jpg')}
                label="Beachy"
            />
            <BubbleCarousel.Item 
                image={require('../../../public/images/fashion-thumb4.jpg')}
                label="Biz Cas’"
            />
            <BubbleCarousel.Item 
                image={require('../../../public/images/fashion-thumb5.jpg')}
                label="All Time"
            />
        </BubbleCarousel>
    ))
