import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    & > svg {
        fill: currentColor;
        width: 2rem;
    }
`

export const Plus = styled(Button)``

export const Minus = styled(Button)``

export const Value = styled.span`
    text-align: center;
`
