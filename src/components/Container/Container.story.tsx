import React from 'react'
import Container from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Container', module)
    .add('Default', () => (
        <div className="story">
            <Container className="story__item">
                Content goes here
            </Container>

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100%;
                    background: rgba(0, 0, 0, 0.25);
                }

                .story__item {
                    background: white;
                }
            `}</style>
        </div>
    ))
