import styled from 'styled-components'
import { Button as AccordionButton, Content as AccordionContent, ButtonLabel as AccordionLabel } from '../Accordion/Accordion.styled'

export const Root = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 1.6rem;

    ${AccordionLabel} {
        font-family: inherit;
        font-weight: ${props => props.theme.typography.body.weight.bold};
    }

    ${AccordionButton}, ${AccordionContent} {
        padding-left: 0;
        padding-right: 0;
    }

    ${AccordionContent} {
        padding-bottom: 2rem;
    }
`

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight.bold};
    font-size: 2rem;
    margin-bottom: 1rem;
`

export const PriceItem = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
`

export const Label = styled.strong<{ $appearance?: 'bold' | 'normal' }>`
    font-weight: ${props => (props.$appearance === 'bold' ? 600 : 400)};
`

export const Buttons = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-gap: 1rem;
    grid-auto-rows: max-content;
`
