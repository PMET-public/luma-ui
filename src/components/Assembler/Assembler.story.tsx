import React from 'react'
import Assembler from './'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { BannerProps } from '../Banner'

storiesOf('📦 Components/Assembler', module)
    .add('Default', () => (
        <div className="story">
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
                            { title: 'Twice around, twice as nice', large: true },
                            { title: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                        ],
                        position: 'bottom',
                        buttons: [
                            { label: 'Shop Performance', fill: true, link: { href: '#' } },
                        ],
                    } as BannerProps,
                },

                // {
                //     name: 'Carousel',
                //     props: {
                //         items: new Array(10).fill({
                //             link: { href: '#' },
                //             image: {
                //                 alt: '',
                //                 src: require('../../../public/images/product-item-sample.jpg'),
                //                 width: 4,
                //                 height: 5,
                //             },
                //             price: '$49.99',
                //             priceSpecial: '$39.99',
                //             title: 'Circle Hooded Ice Flee',
                //             colors: ['brown', 'gray', 'black', 'blue'],
                //         }),
                //     } as CarouselProps,
                // },
                // {
                //     name: 'Carousel',
                //     props: new Array(10).fill({
                //         link: { href: '#' },
                //         image: {
                //             alt: '',
                //             src: require('../../../public/images/product-item-sample.jpg'),
                //             width: 4,
                //             height: 5,
                //         },
                //         price: '$49.99',
                //         priceSpecial: '$39.99',
                //         title: 'Circle Hooded Ice Flee',
                //         colors: ['brown', 'gray', 'black', 'blue'],
                //     }),
                // },
            ])} />
        </div>
    ))
