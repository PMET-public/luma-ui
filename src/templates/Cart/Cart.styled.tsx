import styled from 'styled-components'

import { DetailsWrapper as CartListDetailsWrapper } from '../../components/CartList'

export const Root = styled.div`
    display: grid;
    grid-template-rows: 1fr auto auto;
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
    height: 100%;

    @media ${props => props.theme.breakpoints.large} {
        grid-template-rows: 1fr;
        grid-template-columns: 1.25fr 0.75fr;
    }
`

export const ProductList = styled.div`
    padding: 0 ${props => props.theme.layout.margin};
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 2rem;
    padding-top: 2rem;

    @media ${props => props.theme.breakpoints.medium} {
        ${CartListDetailsWrapper} {
            grid-template:
                'title price quantity'
                'sku sku sku'
                'options options options';
            grid-template-rows: repeat(3, max-content);
            grid-template-columns: 1fr auto auto;
        }
    }

    @media ${props => props.theme.breakpoints.large} {
        padding-top: 4rem;
        grid-gap: 4rem;
    }
`

export const SummaryWrapper = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-auto-rows: max-content;

    @media ${props => props.theme.breakpoints.untilMedium} {
        padding: 2rem ${props => props.theme.layout.margin};
        border-top: 0.1rem solid ${props => props.theme.colors.onSurface10};
    }

    @media ${props => props.theme.breakpoints.large} {
        background-color: ${props => props.theme.colors.graySurface};
        display: flex;
        align-items: flex-end;
        padding: 0 3rem;
    }
`

export const CartSummaryWrapper = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-auto-rows: max-content;
    width: 100%;

    @media ${props => props.theme.breakpoints.large} {
        position: sticky;
        bottom: 0;
        padding: 4rem 0;
    }
`

export const Button = styled.div`
    @media ${props => props.theme.breakpoints.untilMedium} {
        display: none;
    }
`

export const StickyButtonWrapper = styled.div`
    backdrop-filter: blur(10px);
    background-color: ${props => props.theme.colors.surface90};
    border-top: 0.1rem solid ${props => props.theme.colors.onSurface10};
    bottom: 5.2rem; /* Include Tab  */
    display: grid;
    padding: 1.6rem ${props => props.theme.layout.margin};
    position: sticky;

    @media ${props => props.theme.breakpoints.medium} {
        bottom: 0;
    }

    @media ${props => props.theme.breakpoints.large} {
        display: none;
    }
`
