import React from 'react'
import Assembler from './'
import { storiesOf } from '@storybook/react'
import { StoryGlobalStyles, Story } from '../../../.storybook/lib/Story.styled'
import { object } from '@storybook/addon-knobs'
import { BannerProps } from '../Banner'
import { ProductCarouselProps } from '../ProductCarousel'
import styled from 'styled-components'

const StoryContainer = styled(Story)`
    /*  */
    width: 100vw;
`

storiesOf('📦 Components/Assembler', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles />
        <Assembler
            components={object('components', [
                {
                    name: 'Banner',
                    props: {
                        image: {
                            alt: '',
                            src: require('../../../public/images/banner-2.jpg'),
                            height: 650,
                            width: '100%',
                        },
                        titles: [
                            { text: 'Twice around, twice as nice', large: true },
                            { text: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                        ],
                        position: 'bottom',
                        buttons: [{ text: 'Shop Performance', fill: true, as: 'a', href: '#' }],
                    } as BannerProps,
                },

                {
                    name: 'ProductCarousel',
                    props: {
                        title: {
                            text: 'Title',
                        },
                        items: new Array(10).fill({
                            image: {
                                alt: '',
                                src: require('../../../public/images/product-item-sample.jpg'),
                                width: 4,
                                height: 5,
                            },
                            price: {
                                regular: 49.99,
                                special: 39.99,
                                label: 'Starting at',
                            },
                            title: {
                                text: 'Circle Hooded Ice Flee',
                            },
                            colors: [{ value: 'brown' }, { value: 'gray' }, { value: 'black' }, { value: 'blue' }],
                        }),
                    } as ProductCarouselProps,
                },
            ])}
        />
    </StoryContainer>
))
