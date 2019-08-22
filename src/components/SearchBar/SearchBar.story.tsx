import React from 'react'
import SearchBar from './'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { action } from '@storybook/addon-actions'
import { text, number, boolean } from '@storybook/addon-knobs'

const StoryContainer = styled(Story)`
    /* Story Styles */
    width: 90vw;
    padding: 2rem;
`

storiesOf('📦 Components/SearchBar', module).add('Default', () => {
    const value = text('value', 'Shoes')
    const count = value.length > 0 ? number('count', 10) : undefined

    return (
        <StoryContainer>
            <StoryGlobalStyles centered />
            <SearchBar
                onUpdate={(query: string) => action(`onUpdate(${query})`)()}
                onSearch={(query: string) => action(`onSubmit(${query})`)()}
                count={count}
                value={value}
                clearButton={boolean('clearButton', true)}
            />
        </StoryContainer>
    )
})
