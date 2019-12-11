import styled from 'styled-components'
import { ImageTag } from '../Image/Image.styled'

export const Root = styled.div`
    --size: 9rem;
`

export const Item = styled.div`
    text-decoration: none;
    padding: 0 0.75rem;
    display: grid;
    grid-gap: 0.35rem;
`

export const ImageWrapper = styled.div`
    ${ImageTag} {
        border-radius: 50%;
        display: inline-block;
        height: var(--size);
        object-fit: cover;
        object-position: center;
        overflow: hidden;
        width: var(--size);
    }
`

export const Label = styled.div`
    font-size: 1.2rem;
    margin-top: 0.6rem;
    overflow: hidden;
    padding: 0;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    width: var(--size);
`
