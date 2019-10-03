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
        fill: ${({ theme }) => theme.colors.primary};
        width: 1em;
        height: 1em;
    }

    &[disabled] {
        opacity: 0.5;
    }

    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary5};
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    height: 2em;
    width: 2em;
`

export const Plus = styled(Button)``

export const Minus = styled(Button)``

export const Value = styled.span`
    text-align: center;
`
