import React from 'react'
import ProductItem from './'
import { storiesOf } from '@storybook/react'
import { text, object } from '@storybook/addon-knobs'

storiesOf('📦 Components/ProductItem', module)
    .add('Default', () => (
        <div className="story">
            <ProductItem className="story__product-item"
                badge={{
                    text: text('badge', 'New Arrival'),
                }}
                image={{
                    alt: '',
                    src: text('image', require('../../../public/images/product-item-sample.jpg')),
                }}
                price={{
                    regular: 49.99,
                    special: 39.99,
                    label: 'Starting at',
                }}
                title={{
                    text: text('title', 'Circle Hooded Ice Flee'),
                }}
                colors={object('colors', [
                    { value: 'green' },
                    { value: 'blue' },
                    { value: 'gray' },
                ])}
            />

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100vw;
                }

                .story__product-item {
                    width: 60rem;
                }
            `}</style>
        </div>
    ))
    .add('Skeleton', () => (
        <div className="story">
            <ProductItem.Skeleton className="story__product-item" />

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100vw;
                }

                .story__product-item {
                    width: 60rem;
                }
            `}</style>
        </div>
    ))
