import styled from 'styled-components'

import { Wrapper as ContainerWrapper } from '../../components/Container'
import { Root as FiltersRoot } from '../../components/Filters'
import { Wrapper as PillsWrapper } from '../../components/Pills'

import FiltersIcoSvg from 'remixicon/icons/Media/equalizer-line.svg'

export const Root = styled.div`
    display: grid;
    grid-auto-rows: max-content;
`

export const TopBar = styled.div`
    background-color: ${props => props.theme.colors.surface90};
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 1;
`

export const TopBarWrapper = styled(ContainerWrapper)`
    align-items: center;
    color: ${props => props.theme.colors.onSurface};
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr auto;
    height: 7rem;
`

export const CategoriesWrapper = styled(ContainerWrapper)`
    margin-bottom: 2rem;
    ${PillsWrapper} {
        padding-left: ${props => props.theme.layout.margin};
    }
`

export const Heading = styled.div`
    align-items: center;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    grid-gap: 0.3rem;

    @media ${props => props.theme.breakpoints.medium} {
        grid-auto-columns: max-content;
        grid-auto-flow: column;
        grid-gap: 2rem;
    }
`

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight.semi};
    font-size: 1.4rem;
    line-height: 1.5;

    @media ${props => props.theme.breakpoints.medium} {
        font-size: 1.6rem;
    }
`

export const TopBarFilterButton = styled.button`
    & > span {
        align-items: center;
        display: grid;
        fill: currentColor;
        font-size: 1.4rem;
        grid-auto-columns: max-content;
        grid-auto-flow: column;
        grid-gap: 0.75rem;
    }
`

export const FiltersIcon = styled(FiltersIcoSvg)`
    width: 2rem;
`

export const Content = styled.div`
    display: grid;
    grid-auto-rows: minmax(max-content, max-content);
    grid-gap: 3rem;
`

export const ProductListWrapper = styled(ContainerWrapper)``

export const FiltersWrapper = styled.div<{ $active?: boolean; $height: number }>`
    min-height: calc(${props => props.$height * 0.01}px * 100);
    max-height: calc(${props => props.$height * 0.01}px * 100);
    -webkit-overflow-scrolling: touch;
    background-color: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.onSurface};
    display: flex;
    flex-direction: column;
    max-width: calc(100vw - 3rem);
    min-width: 30rem;
    overflow: scroll;
    position: fixed;
    right: 0;
    top: 0;
    transform: translateX(100%);
    transition: transform 305ms ease-out;
    width: auto;
    z-index: 4;

    ${props =>
        props.$active &&
        `
            box-shadow: 3rem 0 6rem rgba(0, 0, 0, 0.75);
            transform: translateX(0);    
        `}

    ${FiltersRoot} {
        padding: 4rem;
        flex-grow: 1;
    }
`

export const FiltersButtons = styled.div`
    background-color: ${props => props.theme.colors.surface};
    bottom: 0;
    color: ${props => props.theme.colors.onSurface};
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
    padding: 2rem;
    position: sticky;

    @supports (padding: max(0px)) {
        padding-bottom: max(2rem, env(safe-area-inset-bottom));
    }
`

export const FiltersScreen = styled.div`
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 2;
    background: ${props => props.theme.colors.surface50};
`

export const NoResult = styled(ContainerWrapper)`
    height: 70%;
    width: 100%;
    font-size: 1.4rem;
`
