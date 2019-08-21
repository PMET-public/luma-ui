import styled from 'styled-components'

import ImageComponent from '../Image'
import { ImageTag } from '../Image/Image.styled'
import ButtonComponent from '../Button'

export const Root = styled.div`
    position: relative;
    width: 100%;
`

export const Image = styled(ImageComponent)`
    display: block;

    ${ImageTag} {
        min-width: 100%;
        min-height: 100%;
        max-width: 100%;
        max-height: 100%;
    }
`

export const Content = styled.div<{ position: 'top' | 'bottom' }>`
    color: #ffffff;
    position: absolute;
    padding: 2rem;

    ${props => props.position === 'top' && 'top: 0;'}
    ${props => props.position === 'bottom' && 'bottom: 0;'}

    @media ${props => props.theme.breakpoints.medium} {
        padding: 5rem;
    }
`

export const Titles = styled.div`
    display: grid;
    grid-gap: 0.7rem;
`

export const Title = styled.div<{ large?: boolean }>`
    margin: 0;
    font-size: 1.6rem;

    ${props =>
        props.large &&
        `
            font-family: ${props.theme.typography.heading.family};
            font-size: 4rem;
            font-weight: ${props.theme.typography.heading.weight};
            text-transform: uppercase;
            line-height: 0.9;

            @media(${props.theme.breakpoints.medium}) {
                font-size: 5rem;
            }

            @media(${props.theme.breakpoints.large}) {
                font-size: 6rem;
            }
        `}

    & > * {
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
    }
`

export const Buttons = styled.div`
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 1rem;
    margin-top: 3rem;
`

export const Button = ButtonComponent
