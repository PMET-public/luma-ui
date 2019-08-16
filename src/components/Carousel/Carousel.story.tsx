import React from 'react'
import Carousel from './'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

storiesOf('📦 Components/Carousel', module)
    .add('Default', () => (
        <div className="story">
            <Carousel className="story__carousel --dynamic-item"
                padding={number('padding', 4)}
                gap={number('gap', 2)}
                show={number('show', 1)}
            >
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

            <hr/>
            
            <Carousel className="story__carousel --two-items">
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

            <style>{`
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
