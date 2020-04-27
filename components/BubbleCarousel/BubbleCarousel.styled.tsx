import styled from 'styled-components'

import Carousel from '../Carousel'
import ImageComponent from '../Image'

export const Root = styled(Carousel)`
    --size: 10rem;
    font-size: var(--size);
`

export const CarouselItem = styled(Carousel.Item)`
    &:first-child {
        padding-left: 1rem;
    }

    &:last-child {
        padding-right: 1rem;
    }
`

export const Wrapper = styled.div`
    text-decoration: none;
    display: grid;
`

export const Image = styled(ImageComponent)`
    border-radius: 50%;
    display: inline-block;
    height: var(--size);
    object-fit: cover;
    object-position: center;
    overflow: hidden;
    width: var(--size);
    color: transparent;
`

export const Label = styled.div`
    font-weight: 400;
    font-size: 0.12em;
    margin-top: 0.6rem;
    overflow: hidden;
    padding: 0;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: var(--size);
`
