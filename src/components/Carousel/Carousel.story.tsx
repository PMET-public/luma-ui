import React from 'react'
import Carousel from './'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import ProductItem from '../ProductItem'

storiesOf('📦 Components/Carousel', module)
    .add('Default', () => (
        <div className="story">
            <Carousel padding={number('padding', 4)}>
                <Carousel.Item>
                    <span className="story__item" style={{ backgroundColor: '#999' }}>
                        1
                    </span>
                </Carousel.Item>
                <Carousel.Item>
                    <span className="story__item" style={{ backgroundColor: '#888' }}>
                        2
                    </span>
                </Carousel.Item>
                <Carousel.Item>
                    <span className="story__item" style={{ backgroundColor: '#777' }}>
                        3
                    </span>
                </Carousel.Item>
            </Carousel>

            <style jsx global>{`
                .story__item {
                    align-items: center;
                    color: #fff;
                    display: flex;
                    height: 50vh;
                    justify-content: center;
                    font-size: 4rem;
                }
            `}</style>
        </div>
    ))
    .add('w/ Products', () => (
        <div className="story">
            <Carousel padding={number('padding', 4)}>
                {[null, null, null].map((_, key) => (
                    <Carousel.Item key={key}>
                        <ProductItem className="story__product" 
                            image={{
                                alt: '',
                                src: require('../../../public/images/product-item-sample.jpg'),
                            }}
                            price="$49.99"
                            priceSpecial="$39.99"
                            title="Circle Hooded Ice Flee"
                            colors={['brown', 'gray', 'black', 'blue']}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100vw;
                }
                .story__item {
                    align-items: center;
                    color: #fff;
                    display: flex;
                    height: 50vh;
                    justify-content: center;
                    font-size: 4rem;
                }
            `}</style>
        </div>
    ))
