import styled from 'styled-components'

import { Root as CartSummaryRoot } from '../../components/CartSummary'

import { Root as CartListRoot, Thumbnail as CartItemThumb } from '../../components/CartList'

export const Root = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    height: 100%;
    grid-row-gap: 4rem;
    grid-column-gap: 2rem;

    @media ${props => props.theme.breakpoints.large} {
        grid-template-rows: 1fr;
        grid-template-columns: 1.25fr 0.75fr;
    }
`

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 4rem;
    grid-auto-rows: max-content;
    padding: 2rem ${props => props.theme.layout.margin};

    @media ${props => props.theme.breakpoints.large} {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
`

export const CartSummaryWrapper = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    grid-template-areas: 'summary' 'list';

    ${CartListRoot} {
        grid-area: list;
        padding: 2rem ${props => props.theme.layout.margin};
        ${CartItemThumb} {
            width: 10rem;
        }
    }

    ${CartSummaryRoot} {
        grid-area: summary;
        padding: 2rem ${props => props.theme.layout.margin};
        border-top: 0.1rem solid ${props => props.theme.colors.onSurface10};

        @media ${props => props.theme.breakpoints.large} {
            padding-top: 4rem;
            padding-bottom: 4rem;
            border-top: 0;
        }
    }

    @media ${props => props.theme.breakpoints.large} {
        grid-template-areas: 'list' 'summary';
        grid-gap: 0;
        grid-template-rows: 1fr auto;

        ${CartListRoot} {
            background-color: ${props => props.theme.colors.graySurface};
        }

        ${CartSummaryRoot} {
            background-color: ${props => props.theme.colors.graySurface};
            backdrop-filter: blur(30px);
            position: sticky;
            bottom: 0;
        }
    }
`

export const Steps = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 8rem;
`

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight.bold};
    font-size: ${props => props.theme.typography.heading.size.secondary};
    margin-bottom: 2rem;
`
