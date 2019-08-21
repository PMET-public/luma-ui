import React from 'react'
import Banner from './'
import { storiesOf } from '@storybook/react'
import { StoryGlobalStyles, Story } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { object, select } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /*  */
    width: 100vw;
`

storiesOf('📦 Components/Banner', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />
        <Banner
            image={object('image', {
                alt: '',
                src: require('../../../public/images/banner-1.jpg'),
                width: 'auto',
                height: 700,
            })}
            position={select('position', { top: 'top', bottom: 'bottom' }, 'top')}
            titles={object('titles', [
                { text: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                { text: 'Twice around, twice as nice', large: true },
            ])}
            buttons={object('buttons', [
                { text: 'Button 1', fill: true, as: 'a', href: '#' },
                { text: 'Button 2', as: 'a', href: '#' },
                { text: 'Button 3', as: 'a', href: '#' },
            ])}
        />
    </StoryContainer>
))
