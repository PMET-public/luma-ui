import styled from 'styled-components'
import { Tabs as TabsComponent, TabList as TabListComponent, Tab as TabComponent, TabPanel as TabPanelComponent } from 'react-tabs'

export const Tabs = styled(TabsComponent)`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const TabListWrapper = styled.div<{ $align?: 'left' | 'center' | 'right' }>`
    text-align: ${({ $align = 'left' }) => $align};
    overflow-x: auto;

    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const TabList = styled(TabListComponent)`
    display: inline-grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-auto-rows: max-content;
    overflow-x: auto;
    align-items: flex-end;
    list-style-type: none;
    background-color: ${props => props.theme.colors.surface};
    position: relative;
    z-index: 1;
`

export const Tab = styled(TabComponent)`
    cursor: pointer;
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight.semi};
    padding: 1.6rem 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.onSurface5};
    height: 85%;
    transition: all 150ms ease-in;
    border-width: 0.1rem 0.1rem 0;
    border-style: solid;

    border-top-color: ${props => props.theme.colors.onSurface10};
    border-left-color: ${props => props.theme.colors.onSurface10};
    border-right-color: transparent;
    border-bottom-color: transparent;

    &:last-child {
        border-right-color: ${props => props.theme.colors.onSurface10};
    }

    &.react-tabs__tab--selected {
        cursor: initial;
        height: 100%;
        border-radius: 0.25rem 0.25rem 0 0;
        border-color: ${props => props.theme.colors.onSurface10};
        background-color: ${props => props.theme.colors.surface};
    }

    &:hover:not(.react-tabs__tab--selected) {
        background-color: ${props => props.theme.colors.onSurface10};
    }
`

export const TabPanel = styled(TabPanelComponent)`
    margin-top: -0.1rem;
    display: none;
    background-color: ${props => props.theme.colors.surface};
    border-width: 0.1rem 0 0.1rem;
    border-style: solid;
    border-color: ${props => props.theme.colors.onSurface10};
    &.react-tabs__tab-panel--selected {
        display: block;
    }
`
