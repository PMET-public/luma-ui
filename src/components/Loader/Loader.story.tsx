import React from 'react'
import Loader from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Loader', module)
    .add('Default', () => (
        <div className="story">
            <Loader label="Loading" />

            <style>{`
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
