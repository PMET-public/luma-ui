import React from 'react'
import ViewLoader from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/ViewLoader', module)
    .add('Default', () => (
        <div className="story">
            <ViewLoader />

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
