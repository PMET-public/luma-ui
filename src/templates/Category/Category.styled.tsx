import styled from 'styled-components'

import { Wrapper as ContainerWrapper } from '../../components/Container'
import { Root as BreadcrumbsRoot } from '../../components/Breadcrumbs'
import { Root as FiltersRoot } from '../../components/Filters'

import FiltersIcoSvg from 'remixicon/icons/Media/equalizer-line.svg'

export const Root = styled.div`
    display: grid;
    grid-gap: 2rem;
`

export const TopBar = styled.div`
    background-color: ${props => props.theme.colors.surface75};
    backdrop-filter: blur(50px);
    position: sticky;
    top: 0;
    z-index: 4;
`

export const TopBarWrapper = styled(ContainerWrapper)`
    padding-top: 2rem;
    padding-bottom: 2rem;
    align-items: center;
    color: ${props => props.theme.colors.onSurface};
    display: grid;
    grid-gap: 1rem 2rem;
    grid-template-columns: 1fr auto;
`

export const CategoriesWrapper = styled(ContainerWrapper)``

export const Heading = styled.div`
    align-items: center;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: max-content;
    grid-gap: 0.5rem;

    ${BreadcrumbsRoot} {
        color: ${props => props.theme.colors.onSurface};
        font-size: 1.3rem;
        line-height: inherit;
    }

    @media ${props => props.theme.breakpoints.medium} {
        grid-auto-columns: max-content;
        grid-auto-flow: column;
        grid-gap: 2rem;
    }
`

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight};
    font-size: 1.6rem;
    line-height: 1.5;
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
    width: 1.2em;
`

export const Content = styled.div`
    display: grid;
    grid-auto-rows: minmax(max-content, max-content);
    grid-gap: 3rem;
`

export const ProductListWrapper = styled(ContainerWrapper)``

export const FiltersWrapper = styled.div<{ $active?: boolean; $height: number }>`
    min-height: calc(${props => props.$height * 0.01}px * 100);

    /* @media ${props => props.theme.breakpoints.smallOnly} { */
        max-height: calc(${props => props.$height * 0.01}px * 100);
        -webkit-overflow-scrolling: touch;
        backdrop-filter: blur(50px);
        background-color: ${props => props.theme.colors.surface75};
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
    /* } */

   
`
