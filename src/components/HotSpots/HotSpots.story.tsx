import React from 'react'
import { HotSpot, HotSpotContainer } from './'
import { storiesOf } from '@storybook/react'
import { object, number } from '@storybook/addon-knobs'

const PriceTagMock = ({ label, price }: any) => (
    <div style={{ fontWeight: 600, fontSize: '1rem'}}>
        <a href="" onClick={e => e.preventDefault()} style={{ marginRight: '1rem' }}>{label}</a>
        <em style={{ borderRadius: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'var(--color-secondary', color: 'var(--color-on-secondary' }}>{price}</em>
    </div>
)

storiesOf('📦 Components/HotSpot', module)
    .add('Default', () => (
        <div style={{
            maxWidth: '96rem',
        }}>
            <HotSpotContainer
                image={require('../../../public/images/llama.jpg')}
                description="La llama que más llama"
            >
                <HotSpot
                    coords={object('coords', { x: 70, y: 42 })}
                    id={0}
                    label="Why did the Llama miss his flight to Imagine?"
                    size={number('size', 5)}
                >
                    <div style={{ fontSize: '1.1rem' }}>
                        <div style={{ marginBottom: '1rem', fontWeight: 600 }}>🦙 Why did the Llama miss his flight to Imagine?</div>
                        😂 He was busy Alpacking.
                    </div>
                </HotSpot>
            </HotSpotContainer>
        </div>
    ))
    .add('Multiple', () => (
        <div style={{
            maxWidth: '96rem',
            margin: '1rem',
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
                    <PriceTagMock label="Knit Sweater" price="$29.99" />
                </HotSpot>
                <HotSpot
                    coords={{ x: 78, y: 30 }}
                    id={1}
                    label="Bag"
                >
                    <PriceTagMock label="Handbag" price="$19.99" />
                </HotSpot>
                <HotSpot
                    coords={{ x: 63, y: 75 }}
                    id={2}
                    label="Pants"
                >
                    <PriceTagMock label="Cotton Chinos" price="$29.99" />
                </HotSpot>
            </HotSpotContainer>
        </div>
        
    ))
