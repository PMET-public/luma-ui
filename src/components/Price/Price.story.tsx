import React from 'react'
import Price from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Price', module)
    .add('Default', () => (
        <div className="story">
            <Price 
                price={text('price', '$9.99')} 
                priceSpecial={text('priceSpecial', '$4.99')} 
                priceLabel={text('priceLable', 'Starting at')}
            />

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100%;
                }
            `}</style>
        </div>
    ))
