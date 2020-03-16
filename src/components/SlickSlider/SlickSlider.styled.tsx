import styled, { createGlobalStyle } from 'styled-components'
import ArrowIconSvg from 'remixicon/icons/System/arrow-left-line.svg'

export const Root = styled.div<{ $draggable?: boolean }>`
    display: flex;
    max-width: 100%;

    ${props =>
        props.$draggable &&
        `
            cursor: move; /* fallback if grab cursor is unsupported */
            cursor: grab;
            cursor: -moz-grab;
            cursor: -webkit-grab
        `}
`

export const Item = styled.div``

export const NavButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    padding: 1rem;
    z-index: 2;
    background: ${props => props.theme.colors.onPrimary};
    line-height: 0;
    transition: opacity 450ms ease;

    &:hover,
    &:focus {
        opacity: 1;
    }

    &.slick-disabled {
        cursor: initial !important;
        opacity: 0.25;
    }
`

export const ArrowIcon = styled(ArrowIconSvg)`
    fill: ${props => props.theme.colors.primary};
    width: 3rem;
    height: 3rem;
`

export const SlickGlobalStyles = createGlobalStyle`
    .slick-slider {
        position: relative;
        display: block;
        box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-touch-callout: none;
        -khtml-user-select: none;
        -ms-touch-action: pan-y;
        touch-action: pan-y;
        -webkit-tap-highlight-color: transparent;
    }

    .slick-list {
        position: relative;
        display: block;
        overflow: hidden;
        margin: 0;
        padding: 0;
    }

    .slick-list:active {
        cursor: grabbing;
        cursor: -moz-grabbing;
        cursor: -webkit-grabbing;
    }

    .slick-list:focus {
        outline: none;
    }

   
    .slick-slider .slick-track, .slick-slider .slick-list {
        -webkit-transform: translate3d(0, 0, 0);
        -moz-transform: translate3d(0, 0, 0);
        -ms-transform: translate3d(0, 0, 0);
        -o-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    .slick-track {
        position: relative;
        top: 0;
        left: 0;
        display: block;
    }

    .slick-track:before, .slick-track:after {
        display: table;
        content: '';
    }

    .slick-track:after {
        clear: both;
    }

    .slick-loading .slick-track {
        visibility: hidden;
    }

    .slick-slide {
        display: none;
        float: left;
        height: 100%;
        min-height: 1px;
    }

    [dir='rtl'] .slick-slide {
        float: right;
    }

    .slick-slide img {
        display: block;
    }

    .slick-slide.slick-loading img {
        display: none;
    }

    .slick-initialized .slick-slide {
        display: block;
    }

    .slick-loading .slick-slide {
        visibility: hidden;
    }

    .slick-vertical .slick-slide {
        display: block;
        height: auto;
        border: 1px solid transparent;
    }

    .slick-arrow.slick-hidden {
        display: none;
    }

    /* Theme */
    [dir='rtl'] .slick-prev {
        right: 0;
        left: auto;
    }

    .slick-next {
        right: 0;
        transform: translateY(-50%) rotate(180deg);
    }

    [dir='rtl'] .slick-next {
        right: auto;
        left: 0;
    }


    /* Dots */

    .slick-dotted.slick-slider {
        margin-bottom: 3rem;
    }

    .slick-dots {
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
    }

    .slick-dots li {
        position: relative;
        display: inline-block;
        margin: 0 0.3rem;
        padding: 0;
        cursor: pointer;
    }

    .slick-dots li button {
        font-size: 0;
        line-height: 0;
        display: block;
        width: 1rem;
        height: 1rem;
        cursor: pointer;
        border: 0;
        outline: none;
        background: currentColor;
        border-radius: 50%;
        opacity: 0.2;
        transform: scale(0.75);
        transition: transform 600ms ease, opacity 600ms ease;
    }

    .slick-dots li.slick-active button {
        opacity: 0.5;
        transform: scale(1)
    }

    .slick-dots li button:hover, .slick-dots li button:focus {
        outline: none;
    }

    .slick-dots li:not(.slick-active) button:hover {
        opacity: 0.5;
    }
`
