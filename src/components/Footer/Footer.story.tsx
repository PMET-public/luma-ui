import React from 'react'
import Footer from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Footer', module)
    .add('Default', () => (
        <div className="story">
            <Footer className="story__footer" 
                copyright="© 2019 Magento, Inc. All Rights Reserved."
            />

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100%;
                }

                .story__footer__column {
                    display: grid;
                    grid-auto-rows: minmax(max-content, max-content);
                    grid-gap: 1.5rem;

                    &.--social {
                        font-size: 2.4rem;
                        grid-auto-flow: column;
                        filter: opacity(0.75);
                    }
                }
            `}</style>
        </div>
    ))
