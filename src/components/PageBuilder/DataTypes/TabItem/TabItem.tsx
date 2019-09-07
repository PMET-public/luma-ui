import React from 'react'
import { Component } from '../../../../lib'
import { Root } from './TabItem.styled'

import ContentWithBackground from '../../lib/ContentWithBackground'
import Accordion from '../../../Accordion'
import { Image } from '../../../../hooks/useImage'

export type TabItemProps = {
    appearance: string
    tabName: string
    backgroundImages: Image
}

export const TabItem: Component<TabItemProps> = ({
    appearance,
    tabName,
    backgroundImages,
    children,
    style,
    ...props
}) => {
    return (
        <Root>
            <Accordion.Item label={tabName} {...props}>
                <ContentWithBackground backgroundImages={backgroundImages} style={style}>
                    {children}
                </ContentWithBackground>
            </Accordion.Item>
        </Root>
    )
}
