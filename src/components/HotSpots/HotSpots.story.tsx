import React from 'react'
import HotSpots from './'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/dist/react'

const PriceTagMock = ({ label, price }: any) => (
    <div style={{ fontWeight: 600 }}>
        <a href="" onClick={e => e.preventDefault()} style={{ marginRight: '1rem' }}>{label}</a>
        <em style={{ borderRadius: '0.5rem', paddingLeft: '1rem', backgroundColor: 'var(--color-secondary', color: 'var(--color-on-secondary' }}>{price}</em>
    </div>
)

storiesOf('📦 Components/HotSpots', module)
    .addDecorator(centered)
    .add('Default', () => (
        <div style={{
            maxWidth: '96rem',
            margin: '1rem',
        }}>
            <HotSpots
                image={require('../../../public/images/products-hotspots.jpg')}
                description="A lot of stuffs"
            >
                <HotSpots.Item
                    coords={{ x: 15, y: 42 }}
                    id={0}
                    label="Sweater"
                >
                    <PriceTagMock label="Knit Sweater" price="$29.99" />
                </HotSpots.Item>
                <HotSpots.Item
                    coords={{ x: 78, y: 30 }}
                    id={1}
                    label="Bag"
                >
                    <PriceTagMock label="Handbag" price="$19.99" />
                </HotSpots.Item>
                <HotSpots.Item
                    coords={{ x: 63, y: 75 }}
                    id={2}
                    label="Pants"
                >
                    <PriceTagMock label="Cotton Chinos" price="$29.99" />
                </HotSpots.Item>
            </HotSpots>
        </div>
    ))
    .add('w/ Link', () => (
        <div style={{
            maxWidth: '96rem',
            margin: '1rem',
        }}>
            <HotSpots
                image={require('../../../public/images/products-hotspots.jpg')}
                description="A lot of stuffs"
            >
                <a href="https://magento.com" target="blank">
                    <HotSpots.Item
                        coords={{ x: 15, y: 42 }}
                        id={0}
                        label="Sweater"
                    />
                </a>
            </HotSpots>
        </div>
        
    ))
