import styled from 'styled-components'

import { Root as CartSummaryRoot } from '../../components/CartSummary/CartSummary.styled'
import { Root as CartListRoot, Thumbnail as CartItemThumb } from '../../components/CartList/CartList.styled'

import PendingIconSvg from 'remixicon/icons/System/checkbox-blank-circle-fill.svg'
import DoneIconSvg from 'remixicon/icons/Design/edit-circle-fill.svg'

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

export const PendingIcon = styled(PendingIconSvg)``
export const DoneIcon = styled(DoneIconSvg)``

export const Title = styled.div<{ $active: boolean }>`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight.bold};
    font-size: ${props => props.theme.typography.heading.size.secondary};
    color: ${props => props.theme.colors.onSurface};
    opacity: 0.6;
    margin-bottom: 2rem;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-gap: 1rem;
    align-items: center;

    ${PendingIcon} {
        margin-top: 0.4rem;
        fill: currentColor;
        width: 0.75em;
        opacity: 0.35;
    }

    ${DoneIcon} {
        margin-top: 0.2rem;
        width: 1em;
        display: none;
        fill: currentColor;
    }

    ${props =>
        props.$active &&
        `
            opacity: 1;
            ${PendingIcon} {
                display: none
            }

            ${DoneIcon} {
                display: block;
            }
        `}
`
