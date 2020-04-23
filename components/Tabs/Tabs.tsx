/**
 * Built with  https://github.com/reactjs/react-tabs
 */

import React from 'react'
import { Component } from '../../lib'
import { Tab as _Tab, Tabs as _Tabs, TabListWrapper, TabList as _TabList, TabPanel as _TabPanel } from './Tabs.styled'

import { TabsProps as _TabsProps, TabListProps as _TabListProps, TabProps as _TabProps, TabPanelProps as _TabPanelProps } from 'react-tabs'

export type TabsProps = _TabsProps
export type TabListProps = _TabListProps
export type TabProps = _TabProps
export type TabPanelProps = _TabPanelProps

const Tabs = _Tabs

const TabList: Component<TabListProps & { align?: 'left' | 'center' | 'right' }> = ({ align = 'left', ...props }) => {
    return (
        <TabListWrapper $align={align}>
            <_TabList {...(props as any)} />
        </TabListWrapper>
    )
}

// @ts-ignore
TabList.tabsRole = 'TabList'

const Tab = _Tab

// @ts-ignore
Tab.tabsRole = 'Tab'

const TabPanel = _TabPanel

// @ts-ignore
TabPanel.tabsRole = 'TabPanel'

export { Tabs, TabList, Tab, TabPanel }
