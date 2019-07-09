import React from 'react'
import ProductItem from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

storiesOf('📦 Components/ProductItem', module)
    .add('Default', () => (
        <div className="story">
            <ProductItem className="story__product-item"
                badge={text('badge', 'New Arrival')}
                image={text('image', require('../../../public/images/product-item-sample.jpg'))}
                price={text('price', '$149.99')}
                priceSpecial={text('priceSpecial', '$49.00')}
                priceLabel={text('priceLabel', 'Starting at')}
                title={text('title', 'Circle Hooded Ice Flee')}
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
                    width: 40rem;
                }
            `}</style>
        </div>
    ))
