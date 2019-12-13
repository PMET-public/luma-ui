import React from 'react'
import { Component } from '../../lib'
import { Root, Tab, Tabs as TabsContainer, TabList, TabPanel } from './Tabs.styled'

export type TabsProps = {}

export const Tabs: Component<TabsProps> = ({ ...props }) => {
    return (
        <Root {...props}>
            <TabsContainer>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </TabsContainer>
        </Root>
    )
}
