import React from 'react'
import Price from './'
import { storiesOf } from '@storybook/react'
import { text, number, select} from '@storybook/addon-knobs'

storiesOf('📦 Components/Price', module)
    .add('Default', () => (
        <div className="story">
            <Price 
                currency={select('currency', { USD: 'USD', EUR: 'EUR' }, 'USD')} 
                regular={number('regular', 9.99)} 
                special={number('special', 4.99)} 
                label={text('label', 'Starting at')}
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
