import styled from 'styled-components'

import {
    Root as CartSummaryRoot,
    Title as CartSummaryTitle,
    Buttons as CartSummaryButtons,
} from '../../components/CartSummary'

import { Root as CartListRoot, Thumbnail as CartItemThumb } from '../../components/CartList'

export const Root = styled.div`
    display: grid;
    grid-gap: 2rem;
    margin: 0 auto;
    height: 100%;

    @media ${props => props.theme.breakpoints.untilMedium} {
        grid-template-areas: 'summary' 'main';
        grid-template-rows: 1fr auto;
    }

    @media ${props => props.theme.breakpoints.large} {
        grid-gap: 1rem;
        grid-template-areas: 'main summary';
        grid-template-columns: 1.5fr 1fr;
    }

    @media ${props => props.theme.breakpoints.xLarge} {
        grid-gap: 6rem;
    }
`

export const Wrapper = styled.div`
    grid-area: main;
    position: relative;
    z-index: 1;
    padding: 2rem ${props => props.theme.layout.margin};
    max-width: 120rem;
    justify-self: center;
    width: 100%;
    align-items: center;
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 4rem;

    @media ${props => props.theme.breakpoints.large} {
        padding-top: 4rem;
        grid-gap: 14rem;
    }

    &::after {
        content: '';
    }
`

export const SummaryWrapper = styled.div`
    color: ${props => props.theme.colors.onSurface};
    display: grid;
    grid-area: summary;
    grid-gap: 2rem;
    grid-template-rows: max-content;

    ${CartItemThumb} {
        width: 10rem;
    }

    ${CartListRoot} {
        margin-bottom: 2rem;
    }

    @media ${props => props.theme.breakpoints.untilMedium} {
        padding: 1.6rem ${props => props.theme.layout.margin} 6rem;
        border-bottom: 0.2rem solid ${props => props.theme.colors.onSurface10};
    }

    @media ${props => props.theme.breakpoints.smallOnly} {
        ${CartSummaryRoot} {
            grid-gap: 1rem;
            font-size: 1.4rem;
        }

        ${CartSummaryTitle} {
            display: none;
        }

        ${CartSummaryButtons} {
            margin-top: 0.75rem;
        }
    }

    @media ${props => props.theme.breakpoints.large} {
        display: grid;
        grid-template-rows: 1fr auto;
        background-color: ${props => props.theme.colors.onSurface10};
        position: sticky;
        top: 0;

        ${CartListRoot} {
            padding: 4rem;
        }

        ${CartSummaryRoot} {
            padding: 4rem;
            width: 100%;
            position: sticky;
            bottom: 0;
        }
    }
`

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight};
    font-size: 2rem;
    margin-bottom: 2rem;
`
