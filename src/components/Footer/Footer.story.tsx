import React from 'react'
import Footer from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Footer', module)
    .add('Default', () => (
        <div className="story">
            <Footer className="story__footer" />

            <style jsx global>{`
                .story {
                    align-items: flex-end;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100%;
                }

                .story__footer {
                    width: 100%;
                }
            `}</style>
        </div>
    ))
