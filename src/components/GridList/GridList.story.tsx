import React from 'react'
import GridList from './'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'
import ProductItem from '../ProductItem'
import Container from '../Container'

storiesOf('📦 Components/GridList', module)
    .add('Default', () => (
        <Container className="story">
            <GridList className="story__grid">
                {new Array(number('# items', 10)).fill('Hola').map((_, key) => (
                    <GridList.Item key={key}>
                         <div>🙌</div>
                    </GridList.Item>
                ))}
            </GridList>

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100%;
                }

                .story__grid {
                    width: 100%;

                    & .grid-list-item {
                        background-color: #ddd;
                        display: block;       
                        padding: 2rem;
                        text-align: center;                 
                    }
                }
            `}</style>
        </Container>
    ))
    .add('w/ Products', () => (
        <Container className="story">
            <GridList className="story__grid">
                {new Array(number('# items', 10)).fill('Hola').map((_, key) => (
                    <GridList.Item key={key}>
                        <ProductItem className="story__product" 
                            image={{
                                alt: '',
                                src: require('../../../public/images/product-item-sample.jpg'),
                            }}
                            price={{
                                price: '$49.99',
                                priceSpecial: '$39.99',
                                priceLabel: 'Starting at',
                            }}
                            title={{
                                label: 'Circle Hooded Ice Flee',
                            }}
                            colors={[
                                { value: 'brown' }, 
                                { value: 'gray' }, 
                                { value: 'black' }, 
                                { value: 'blue' },
                            ]}
                        />
                    </GridList.Item>
                ))}
            </GridList>

            <style jsx global>{`
                
            `}</style>
        </Container>
    ))
