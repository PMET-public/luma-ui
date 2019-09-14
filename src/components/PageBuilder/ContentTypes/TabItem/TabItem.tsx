import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './TabItem.styled'

import ContentWithBackground, { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'
import Accordion from '../../../Accordion'

export type TabItemProps = {
    appearance: string
    tabName: string
    background: ContentWithBackgroundProps
}

export const TabItem: Component<TabItemProps> = ({ appearance, tabName, background, children, style, ...props }) => {
    return (
        <Root>
            <Accordion.Item label={tabName} {...props}>
                <ContentWithBackground {...background} style={style}>
                    {children}
                </ContentWithBackground>
            </Accordion.Item>
        </Root>
    )
}
