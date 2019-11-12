import styled from 'styled-components'

export const Root = styled.div`
    align-items: center;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.onSurface};
    display: flex;
    flex-wrap: wrap;
    opacity: 0.6;
`

export const ItemWrapper = styled.span`
    &:not(:last-of-type) {
        margin-right: 1.6rem;
    }

    line-height: 1.5;
`

export const Item = styled.span``
