import React from 'react'
import ProductCarousel from '.'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { object } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /* Story Styles */
    padding: 2rem 0;
    width: 100vw;
`

storiesOf('📦 Components/ProductCarousel', module).add('Default', () => {
    const props = {
        title: object('title', {
            text: 'Title',
        }),
        items: new Array(10).fill({
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
                text: 'Circle Hooded Ice Flee',
            },
            colors: [{ value: 'brown' }, { value: 'gray' }, { value: 'black' }, { value: 'blue' }],
        }),
    }

    return (
        <StoryContainer>
            <StoryGlobalStyles centered />
            <ProductCarousel {...props} />
        </StoryContainer>
    )
})
