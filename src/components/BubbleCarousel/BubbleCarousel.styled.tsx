import styled from 'styled-components'

import ImageComponent, { ImageTag } from '../Image'

const size = '9rem'

export const Root = styled.div`
    /* 
        This is... this is just unfortunate.
        https://stackoverflow.com/questions/40733385/hiding-webkit-scrollbar-when-overflow-scrolling-touch-is-enabled 
    */
    height: calc(${size} + 2rem);
    overflow-y: hidden;
`

export const Wrapper = styled.div`
    -webkit-overflow-scrolling: touch;
    display: flex;
    margin-top: -1rem;
    overflow-x: scroll;
    padding: 1rem 0 1rem;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const Item = styled.div`
    text-decoration: none;
    padding: 0 0.75rem;
    display: grid;
    grid-gap: 0.35rem;

    &:last-of-type {
        padding-right: 0.75rem;
    }

    &:first-of-type {
        padding-left: 0.75rem;
    }
`

export const Image = styled(ImageComponent)`
    ${ImageTag} {
        border-radius: 50%;
        display: inline-block;
        height: ${size};
        object-fit: cover;
        object-position: center;
        overflow: hidden;
        width: ${size};
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
    width: ${size};
`
