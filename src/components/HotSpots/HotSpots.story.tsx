import React from 'react'
import HotSpot, { HotSpotContainer } from '.'
import { storiesOf } from '@storybook/react'
import { object, number } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'

storiesOf('📦 Components/HotSpot', module)
    .addDecorator(centered)
    .add('Default', () => (
        <div style={{
            border: '2px dashed #ddd',
            maxWidth: '96rem',
            margin: '1rem',
            borderRadius: '1rem',
        }}>
            <HotSpotContainer
                image={require('../../../public/images/llama.jpg')}
                description="La llama que más llama"
            >
                <HotSpot
                    coords={object('coords', { x: 65, y: 42 })}
                    id={0}
                    label="Why did the Llama miss his flight to Imagine?"
                    size={number('size', 5)}
                >
                    <p style={{ fontSize: '1.8rem' }}>
                        <strong style={{ fontWeight: 600 }}>🤔 Why did the Llama miss his flight to Imagine?</strong><br />
                        <div style={{ paddingTop: '1rem' }}>🥁 He was busy Alpacking.</div>
                    </p>
                </HotSpot>
            </HotSpotContainer>
        </div>
    ))
    .add('Multiple', () => (
        <div style={{
            border: '2px dashed #ddd',
            maxWidth: '96rem',
            margin: '1rem',
            borderRadius: '1rem',
        }}>
            <HotSpotContainer
                image={require('../../../public/images/products-hotspots.jpg')}
                description="A lot of stuffs"
            >
                <HotSpot
                    coords={{ x: 15, y: 42 }}
                    id={0}
                    label="Sweater"
                >
                    Hello
                </HotSpot>
                <HotSpot
                    coords={{ x: 78, y: 30 }}
                    id={1}
                    label="Bag"
                >
                    Hi
                </HotSpot>
                <HotSpot
                    coords={{ x: 63, y: 75 }}
                    id={2}
                    label="Pants"
                >
                    Again
                </HotSpot>
            </HotSpotContainer>
        </div>
        
    ))
