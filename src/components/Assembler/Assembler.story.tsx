import React from 'react'
import Assembler from './'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { BannerProps } from '../Banner'
import { ProductsCarouselProps } from '../ProductsCarousel'
import { Container } from '../../lib'

storiesOf('📦 Components/Assembler', module)
    .add('Default', () => (
        <Container className="story">
            <Assembler components={object('components', [
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
                        buttons: [
                            { text: 'Shop Performance', fill: true, as: 'a', href: '#' },
                        ],
                    } as BannerProps,
                },

                {
                    name: 'ProductsCarousel',
                    props: {
                        title: object('title', {
                            text: 'Title',
                        }),
                        items: new Array(10).fill({
                            image: {
                                alt: '',
                                src: require('../../../public/images/product-item-sample.jpg'),
                                width: 4,
                                height: 5,
                            },
                            price: {
                                price: '$49.99',
                                priceSpecial: '$39.99',
                                priceLabel: 'Starting at',
                            },
                            title: {
                                text: 'Circle Hooded Ice Flee',
                            },
                            colors: [
                                { value: 'brown' },
                                { value: 'gray' },
                                { value: 'black' },
                                { value: 'blue' },
                            ],
                        }),
                    } as ProductsCarouselProps,
                },
            ])} />
        </Container>
    ))
