import React, { useEffect, useState } from 'react'
import addons, { makeDecorator } from '@storybook/addons'
import ThemeProvider from '../../../src/theme'

import styled from 'styled-components'
import { events } from './register'

const Story = styled.div<{ $layout: 'centered' | 'fullPage' }>`
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
    wrapper: (getStory, context, { parameters = {} }) => {
        const [params, setParams] = useState({})

        const channel = addons.getChannel()

        useEffect(() => {
            channel.addListener(events.ON_UPDATE, handleOnUpdate)

            channel.emit(events.GET_VALUES)

            return () => {
                channel.removeListener(events.ON_UPDATE, handleOnUpdate)
            }
        }, [])

        function handleOnUpdate({ active, ...newParams }) {
            setParams(newParams)
        }

        return (
            <ThemeProvider {...params}>
                <Story $layout={parameters.layout || 'centered'}>{getStory(context)}</Story>
            </ThemeProvider>
        )
    },
})
