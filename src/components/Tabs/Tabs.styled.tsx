import styled from 'styled-components'
import {
    Tabs as TabsComponent,
    TabList as TabListComponent,
    Tab as TabComponent,
    TabPanel as TabPanelComponent,
} from 'react-tabs'

export const Root = styled.div``

export const Tabs = styled(TabsComponent)``

export const TabList = styled(TabListComponent)`
    list-style-type: none;
`

export const Tab = styled(TabComponent)`
    &.react-tabs__tab--selected {
        border-bottom: 1px solid black;
    }
`

export const TabPanel = styled(TabPanelComponent)`
    display: none;

    &.react-tabs__tab-panel--selected {
        display: block;
    }
`
