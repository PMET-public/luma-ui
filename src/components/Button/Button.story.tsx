import React from 'react'
import Button from './'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Button', module)
    .add('Default', () => (
        <div className="story">
            <Button 
                color={select('color', { primary: 'primary', secondary: 'secondary'}, undefined)}
                fill={boolean('fill', false)}
                label={text('label', 'Button')}
            />

            <style jsx global>{`
                .story {
                    align-items: center;
                    background-color: #ccc;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100%;
                }
            `}</style>
        </div>
    ))
