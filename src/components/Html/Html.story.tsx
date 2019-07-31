import React from 'react'
import Html from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Html', module)
    .add('Default', () => (
        <div className="story">
            <Html />

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
