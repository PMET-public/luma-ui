import React from 'react'
import BubbleCarousel from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/BubbleCarousel', module)
    .add('Default', () => (
        <BubbleCarousel label='Shop the Look'>
            <BubbleCarousel.Item 
                as="a"
                href="#"
                image={{
                    src: require('../../../public/images/fashion-thumb1.jpg'),
                }}
                text="Minimalist"
            />
            <BubbleCarousel.Item 
                as="a"
                href="#"
                image={{
                    src: require('../../../public/images/fashion-thumb2.jpg'),
                }}
                text="Dressy"
            />
            <BubbleCarousel.Item 
                as="a"
                href="#"
                image={{
                    src: require('../../../public/images/fashion-thumb3.jpg'),
                }}
                text="Beachy"
            />
            <BubbleCarousel.Item 
                as="a"
                href="#"
                image={{
                    src: require('../../../public/images/fashion-thumb4.jpg'),
                }}
                text="Biz Cas’"
            />
            <BubbleCarousel.Item 
                as="a"
                href="#"
                image={{
                    src: require('../../../public/images/fashion-thumb5.jpg'),
                }}
                text="All Time"
            />
        </BubbleCarousel>
    ))
