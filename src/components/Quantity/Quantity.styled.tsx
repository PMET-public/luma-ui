import styled from 'styled-components'

export const Root = styled.div`
    align-items: center;
    display: grid;
    grid-gap: 1.4rem;
    grid-template-columns: 1fr max-content;
`

export const Actions = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: max-content max-content;
`

const Button = styled.button`
    font-size: 1.6rem;
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
    min-height: 2em;
    min-width: 2em;
`

export const Plus = styled(Button)``

export const Minus = styled(Button)``

export const Value = styled.span`
    text-align: center;

    & > sub {
        font-size: 80%;
    }
`
