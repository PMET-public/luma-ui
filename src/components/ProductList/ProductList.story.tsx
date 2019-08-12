import React from 'react'
import ProductList from '.'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import { Container } from '../../lib'

storiesOf('📦 Components/ProductList', module)
    .add('Default', () => (
        <Container className="story">
            <ProductList
                loading={number('loading #', 0)}
                items={
                    new Array(number('# items', 10)).fill(null).map(() => ({
                        image: {
                            alt: '',
                            src: require('../../../public/images/product-item-sample.jpg'),
                        },
                        price: {
                            regular: 49.99,
                            special: 39.99,
                            label: 'Starting at',
                        },
                        title: {
                            label: 'Circle Hooded Ice Flee',
                        },
                        colors: [
                            { value: 'brown' }, 
                            { value: 'gray' }, 
                            { value: 'black' }, 
                            { value: 'blue' },
                        ],
                    }))
                }
            />
        </Container>
    ))
