import React from 'react'
import TextSwatches from './'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

storiesOf('📦 Components/TextSwatches', module)
    .add('Default', () => (
        <div className="story">
            <div className="story__wrapper">
                <TextSwatches
                    items={object('list', [
                        { label: 2, as: 'button', disabled: true },
                        { label: 4, active: true, as: 'button' },
                        { label: 6 },
                        { label: 8 },
                    ])}
                />
            </div>

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100%;
                }
                
                .story__wrapper {
                    width: 30rem;
                }
            `}</style>
        </div>
    ))
