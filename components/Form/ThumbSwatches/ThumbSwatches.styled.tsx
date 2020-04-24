import styled from 'styled-components'

export const Item = styled.div`
    & > label {
        position: relative;
        display: block;
        cursor: pointer;
        border: 0.1rem solid transparent;
        border-radius: 0.7rem;
        padding: 0.3rem;

        & .LazyLoadImage {
            border-radius: 0.5rem;
            overflow: hidden;
            transition: all 305ms ease;
            width: 100% !important;
            height: 100% !important;

            & img {
                width: 100%;
                height: 100%;
                display: block;
            }

            &.lazy-load-image-loaded {
                filter: brightness(98%) contrast(94%);
            }
        }
    }

    & > input[type='radio'] {
        opacity: 0;
        position: absolute;
    }

    & > input[type='radio']:checked + label,
    & > input[type='radio']:focus + label {
        border-color: ${props => props.theme.colors.primary} !important;
        & .LazyLoadImage {
            &.lazy-load-image-loaded {
                filter: brightness(100%) contrast(100%) !important;
            }
        }
    }

    & > input[type='radio']:disabled + label {
        & .LazyLoadImage {
            &.lazy-load-image-loaded {
                filter: grayscale(100%) opacity(25%) contrast(90%);
            }
        }
    }

    &:hover > input[type='radio']:not(:disabled) + label {
        border-color: ${props => props.theme.colors.primary75};
        & .LazyLoadImage {
            &.lazy-load-image-loaded {
                filter: brightness(98%) contrast(92%);
            }
        }
    }
`
