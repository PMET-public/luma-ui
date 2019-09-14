import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './Tabs.styled'

import Accordion from '../../../Accordion'

export type TabsProps = {
    appearance: string
    activeTab: number
}

export const Tabs: Component<TabsProps> = ({ appearance, activeTab, ...props }) => {
    const selected = Number(activeTab)
    return (
        <Root>
            <Accordion defaultSelected={selected} {...props} />
        </Root>
    )
}
