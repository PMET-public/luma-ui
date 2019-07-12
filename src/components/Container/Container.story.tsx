import React from 'react'
import Container from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Container', module)
    .add('Default', () => (
        <div className="story">
            <Container />

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
