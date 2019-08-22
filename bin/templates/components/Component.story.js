const source = require('common-tags').source

module.exports = (Name, folder = 'components') => {

    labels = {
        components: '📦 Components',
        pages: '📑 Pages',
    }
    
    return source`

        import React from 'react'
        import FooBar from './'
        import { storiesOf } from '@storybook/react'
        import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
        import styled from 'styled-components'
        
        const StoryContainer = styled(Story)\`
            /* Story Styles */
        \`
        
        storiesOf('📦 Components/FooBar', module).add('Default', () => (
            <StoryContainer>
                <StoryGlobalStyles centered />
        
                <FooBar />
            </StoryContainer>
        ))
        

    ` + '\n'
}
