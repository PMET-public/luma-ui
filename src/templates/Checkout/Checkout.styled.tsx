import styled from 'styled-components'

import { Root as CartSummaryRoot } from '../../components/CartSummary'

import { Root as CartListRoot, Thumbnail as CartItemThumb } from '../../components/CartList'

export const Root = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
    height: 100%;
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;

    @media ${props => props.theme.breakpoints.large} {
        grid-template-rows: 1fr;
        grid-template-columns: 1.25fr 0.75fr;
    }
`

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-auto-rows: max-content;
    padding: 0 ${props => props.theme.layout.margin};
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

// export const Root = styled.div`
//     display: grid;
//     grid-gap: 2rem;
//     margin: 0 auto;
//     height: 100%;
//     grid-auto-rows: max-content;

//     @media ${props => props.theme.breakpoints.untilMedium} {
//         grid-template-areas: 'title' 'main' 'summary';
//         grid-template-rows: 1fr auto;
//     }

//     @media ${props => props.theme.breakpoints.large} {
//         grid-gap: 1rem;
//         grid-template-areas: 'title summary' 'main summary';
//         grid-template-columns: 1.25fr 0.75fr;
//         grid-template-rows: 1fr;
//     }
// /*
//     @media ${props => props.theme.breakpoints.xLarge} {
//         grid-gap: 6rem;
//     } */
// `

// export const PageTitle = styled.div`
//     grid-area: 'title';
//     padding-left: ${props => props.theme.layout.margin};
//     padding-right: ${props => props.theme.layout.margin};
// `

// export const Wrapper = styled.div`
//     grid-area: main;
//     position: relative;
//     z-index: 1;
//     padding: 0 ${props => props.theme.layout.margin};
//     /* max-width: 120rem; */
//     justify-self: center;
//     width: 100%;
//     /* align-items: center; */
//     display: grid;
//     grid-auto-rows: max-content;
//     grid-gap: 4rem;

//     @media ${props => props.theme.breakpoints.large} {
//         grid-gap: 8rem;
//     }

//     &::after {
//         content: '';
//     }
// `

// export const SummaryWrapper = styled.div`
//     color: ${props => props.theme.colors.onSurface};
//     display: grid;
//     grid-area: summary;
//     grid-gap: 2rem;
//     grid-template-rows: max-content;

// ${CartItemThumb} {
//     width: 10rem;
// }

// ${CartListRoot} {
//     margin-bottom: 2rem;
// }

//     @media ${props => props.theme.breakpoints.untilMedium} {
//         padding: 1.6rem ${props => props.theme.layout.margin} 6rem;
//         border-bottom: 0.2rem solid ${props => props.theme.colors.onSurface10};
//     }

//     @media ${props => props.theme.breakpoints.smallOnly} {
//         ${CartSummaryRoot} {
//             grid-gap: 1rem;
//             font-size: 1.4rem;
//         }

//         ${CartSummaryTitle} {
//             display: none;
//         }

//         ${CartSummaryButtons} {
//             margin-top: 0.75rem;
//         }
//     }

//     @media ${props => props.theme.breakpoints.large} {
//         display: grid;
//         grid-template-rows: 1fr auto;
//         background-color: ${props => props.theme.colors.onSurface10};
//         position: sticky;
//         top: 0;

//         ${CartListRoot} {
//             padding: 4rem;
//         }

//         ${CartSummaryRoot} {
//             padding: 4rem;
//             width: 100%;
//             position: sticky;
//             bottom: 0;
//         }
//     }
// `
