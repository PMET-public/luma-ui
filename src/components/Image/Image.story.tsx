import React from 'react'
import Image from './'
import { storiesOf } from '@storybook/react'
import { StoryGlobalStyles, Story } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { text, number, boolean } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /*  */
`

storiesOf('📦 Components/Image', module)
    .add('Default', () => (
        <StoryContainer>
            <StoryGlobalStyles centered />
            <Image
                alt={text('alt', 'Lorem')}
                src={text('src', require('../../../public/images/selfie.jpeg'))}
                height={number('height', 400)}
                width={number('width', 600)}
                vignette={number('vignette', 0)}
                transition={boolean('transition', true)}
            />
        </StoryContainer>
    ))
    .add('Broken URL', () => (
        <StoryContainer>
            <StoryGlobalStyles centered />
            <Image
                alt={text('alt', 'Lorem')}
                src={text('src', 'notfound.jpeg')}
                height={number('height', 400)}
                width={number('width', 600)}
                vignette={number('vignette', 0)}
                transition={boolean('transition', true)}
            />
        </StoryContainer>
    ))
