import React from 'react'
import Pills from '.'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

storiesOf('📦 Components/Pills', module)
    .add('Default', () => (
        <div className="story">
            <Pills items={object('items', [
                {
                    _id: 0,
                    text: 'Tops',
                    count: 2,
                },
                {
                    _id: 1,
                    text: 'Bottoms',
                    count: 13,
                },
                {
                    _id: 2,
                    text: 'Sweaters',
                    count: 100,
                },
            ])} />

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
