import React from 'react'
import ThumbSwatches from './'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

storiesOf('📦 Components/ThumbSwatches', module)
    .add('Default', () => (
        <div className="story">
            <div className="story__wrapper">
                <ThumbSwatches 
                    items={object('items', [
                        {
                            active: true,
                            image: {
                                alt: '',
                                src: require('../../../public/images/product-item-sample.jpg'),
                                width: 4,
                                height: 5,
                            },
                        },
                        {
                            disabled: true,
                            image: {
                                alt: '',
                                src: require('../../../public/images/product-item-sample.jpg'),
                                width: 4,
                                height: 5,
                            },
                        },
                        {
                            image: {
                                alt: '',
                                src: require('../../../public/images/product-item-sample.jpg'),
                                width: 4,
                                height: 5,
                            },
                        },
                        
                    ])}
                />
            </div>

            <style>{`
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
