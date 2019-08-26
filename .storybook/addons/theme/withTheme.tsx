import React from 'react'
import { makeDecorator } from '@storybook/addons'
import ThemeProvider from '../../../src/theme'
import styled from 'styled-components'

const Story = styled.div<{ $layout?: 'centered' | 'fullPage' }>`
    ${props =>
        props.$layout === 'centered' &&
        `
                min-height: 100vh;
                min-width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
        `}
`

export const withTheme = makeDecorator({
    name: 'withTheme',
    parameterName: 'theme',

    wrapper: (getStory, context, { parameters: { layout = 'centered' } = {} }) => {
        return (
            <ThemeProvider>
                <Story $layout={layout}>{getStory(context)}</Story>
            </ThemeProvider>
        )
    },
})
