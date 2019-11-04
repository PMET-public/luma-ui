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
    /* max-width: ${props => props.theme.layout.containedWidth}; */
    margin: 0 auto;
    height: 100%;

    @media ${props => props.theme.breakpoints.untilMedium} {
        grid-template-rows: 1fr auto;
    }

    @media ${props => props.theme.breakpoints.large} {
        grid-gap: 1rem;
        grid-template-columns: 1.5fr 1fr;
    }

    @media ${props => props.theme.breakpoints.xLarge} {
        grid-gap: 6rem;
    }
`

export const Wrapper = styled.div`
    position: relative;
    z-index: 1;
    padding: 2rem ${props => props.theme.layout.margin} 4rem;
    max-width: 120rem;
    justify-self: center;
    width: 100%;
    align-items: center;
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 10rem;

    @media ${props => props.theme.breakpoints.large} {
        padding-top: 4rem;
    }
`

export const CartSummaryWrapper = styled.div`
    color: ${props => props.theme.colors.onSurface};

    @media ${props => props.theme.breakpoints.untilMedium} {
        padding: 1.6rem ${props => props.theme.layout.margin};
        background-color: ${props => props.theme.colors.surface90};
        backdrop-filter: blur(10px);
        border-top: 0.2rem solid ${props => props.theme.colors.onSurface10};
        bottom: 0;
        position: sticky;
        z-index: 2;
    }

    @media ${props => props.theme.breakpoints.smallOnly} {
        bottom: 5rem;

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
        /* height: 100vh; */
        /* display: flex;
        height: calc(100vh);
        align-items: flex-end; */
        background-color: ${props => props.theme.colors.onSurface10};
        position: sticky;
        top: 0;
        /* margin-top: -6rem; */

        ${CartSummaryRoot} {
            padding: 4rem;
            width: 100%;
        }
    }

    ${CartListRoot} {
        padding: 2rem;
    }

    ${CartItemThumb} {
        width: 10rem;
    }
`

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight};
    font-size: 2rem;
    margin-bottom: 2rem;
`
