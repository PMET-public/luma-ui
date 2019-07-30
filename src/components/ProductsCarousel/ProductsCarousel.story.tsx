import React from 'react'
import ProductsCarousel from './'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

storiesOf('📦 Components/ProductsCarousel', module)
    .add('Default', () => {
        const props = {
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
        }
        
        return (
            <div className="story">
                <ProductsCarousel {...props} className="story__product-carousel" />

                <style jsx global>{`
                    .story {
                        align-items: center;
                        display: flex;
                        height: 100vh;
                        justify-content: center;
                    }

                    .story__product-carousel {
                        width: 90vw;
                    }
                `}</style>
            </div>
        )
    })
