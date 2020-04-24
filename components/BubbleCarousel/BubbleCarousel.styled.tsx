import styled from 'styled-components'

export const Root = styled.div`
    --size: 10rem;
    font-size: var(--size);
`

export const CarouselItem = styled.div`
    text-decoration: none;
    display: grid;

    &:first-child {
        padding-left: 1rem;
    }

    &:last-child {
        padding-right: 1rem;
    }
`

export const ImageWrapper = styled.div`
    & img {
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
