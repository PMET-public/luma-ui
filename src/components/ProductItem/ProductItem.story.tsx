import React from 'react'
import ProductItem from './'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { text, object } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /* Story Styles */
    max-width: 100vw;
    width: 60rem;
`

storiesOf('📦 Components/ProductItem', module)
    .add('Default', () => (
        <StoryContainer>
            <StoryGlobalStyles centered />
            <ProductItem
                badge={{
                    text: text('badge', 'New Arrival'),
                }}
                colors={object('colors', [
                    { label: 'green', value: 'green' },
                    { label: 'blue', value: 'blue' },
                    { label: 'gray', value: 'gray' },
                ])}
                image={{
                    alt: '',
                    src: text('image', require('../../../public/images/product-item-sample.jpg')),
                }}
                price={{
                    regular: 49.99,
                    special: 39.99,
                    label: 'Starting at',
                }}
                title={{
                    text: text('title', 'Circle Hooded Ice Flee'),
                }}
            />
        </StoryContainer>
    ))
    .add('Skeleton', () => (
        <StoryContainer>
            <StoryGlobalStyles centered />
            <ProductItem.Skeleton />
        </StoryContainer>
    ))
