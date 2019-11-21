import styled from 'styled-components'

export const Root = styled.div`
    align-items: center;
    color: ${props => props.theme.colors.onSurface};
    display: flex;
    flex-wrap: wrap;
    opacity: 0.6;
    font-size: 1.3rem;
`

export const ItemWrapper = styled.span`
    font-size: inherit;
    &:not(:last-of-type) {
        margin-right: 0.6em;
    }

    line-height: 1.5;
`

export const Item = styled.span``
