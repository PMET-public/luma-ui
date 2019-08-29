import React, { useEffect } from 'react'
import addons, { types } from '@storybook/addons'

import { useAddonState } from '@storybook/api'

import styled from 'styled-components'
import { Icons, IconButton, Separator } from '@storybook/components'

export const ADDON_ID = 'luma/theme'
export const TOOL_ID = `${ADDON_ID}/tool`
export const events = {
    ON_UPDATE: `${ADDON_ID}/onUpdate`,
    GET_VALUES: `${ADDON_ID}/getValues`,
}

const Icon = styled(Icons)`
    width: 1em;
    fill: currentColor;
    opacity: 1 !important;
`

const ThemeTool = () => {
    const channel = addons.getChannel()

    const [params, setParams] = useAddonState(ADDON_ID, {
        dark: false,
    })

    useEffect(handleOnUpdate, [params])

    useEffect(() => {
        channel.addListener(events.GET_VALUES, handleOnValue)

        return () => {
            channel.removeListener(events.GET_VALUES, handleOnValue)
        }
    }, [params])

    function handleOnUpdate() {
        channel.emit(events.ON_UPDATE, params)
    }

    function handleOnValue() {
        channel.emit(events.ON_UPDATE, params)
    }

    return (
        <React.Fragment>
            <Separator />
            <IconButton
                key="theme"
                title="Light/Dark Mode"
                onClick={() =>
                    setParams({
                        dark: !params.dark,
                    })
                }
            >
                <Icon icon={params.dark ? 'circlehollow' : 'circle'} />
            </IconButton>
            {/* <Separator /> */}
        </React.Fragment>
    )
}

addons.register(ADDON_ID, () => {
    addons.add(TOOL_ID, {
        type: types.TOOL,
        title: 'theme',
        match: ({ viewMode }) => viewMode === 'story',
        render: () => <ThemeTool />,
    })
})
