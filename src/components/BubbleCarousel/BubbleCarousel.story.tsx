import React from 'react'
import BubbleCarousel from '.'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/BubbleCarousel', module).add('Default', () => (
    <BubbleCarousel
        label="Shop the Look"
        loading={boolean('loading', false)}
        items={[
            {
                as: 'a',
                href: '#',
                image: {
                    src: require('../../../public/images/fashion-thumb1.jpg'),
                },
                text: 'Minimalist',
            },
            {
                as: 'a',
                href: '#',
                image: {
                    src: require('../../../public/images/fashion-thumb1.jpg'),
                },
                text: 'Minimalist',
            },
            {
                as: 'a',
                href: '#',
                image: {
                    src: require('../../../public/images/fashion-thumb2.jpg'),
                },
                text: 'Dressy',
            },
            {
                as: 'a',
                href: '#',
                image: {
                    src: require('../../../public/images/fashion-thumb3.jpg'),
                },
                text: 'Beachy',
            },
            {
                as: 'a',
                href: '#',
                image: {
                    src: require('../../../public/images/fashion-thumb4.jpg'),
                },
                text: 'Biz Cas’',
            },
            {
                as: 'a',
                href: '#',
                image: {
                    src: require('../../../public/images/fashion-thumb5.jpg'),
                },
                text: 'All Time',
            },
        ]}
    />
))
