import React from 'react'
import Breadcrumbs from './'
import { storiesOf } from '@storybook/react'
import { StoryGlobalStyles, Story } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { text } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /*  */
    padding: 3rem;
`
storiesOf('📦 Components/Breadcrumbs', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles centered />
        <Breadcrumbs
            dividor={text('dividor', '')}
            prefix={text('prefix', '#')}
            items={[
                { as: 'a', href: '#', text: 'One' },
                { as: 'a', href: '#', text: 'Two' },
                { as: 'a', href: '#', text: 'Three' },
            ]}
        />
    </StoryContainer>
))
