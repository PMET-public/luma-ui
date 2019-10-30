import styled from 'styled-components'
import { FieldWrapper, FieldLabel, FieldError } from '../FormBuilder.styled'

import CarretIconSvg from 'remixicon/icons/System/arrow-drop-down-line.svg'

export const Root = FieldWrapper

export const SelectField = styled.div<{ $error?: boolean }>`
    align-items: center;
    background-color: ${props => props.theme.colors.surface};
    border-bottom: 0.1rem solid ${props => props.theme.colors.primary25};
    border-left: none;
    border-right: none;
    border-top: none;
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 0 0 0.6rem;
    pointer-events: none;
    position: relative;
    transition: border 250ms ease;
    z-index: 2;

    ${props =>
        props.$error &&
        `
            border-bottom-color: ${props.theme.colors.onError} !important;
        `}
`

export const SelectWrapper = styled.div`
    position: relative;

    & > select {
        bottom: 0;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1;

        &:focus {
            outline: none;
        }
    }

    &:focus-within {
        ${SelectField} {
            border-bottom-color: ${props => props.theme.colors.primary75};
        }
    }
`

export const Label = FieldLabel

export const Error = FieldError

export const CarretIcon = styled(CarretIconSvg)`
    fill: currentColor;
    width: 2.4rem;
    height: 2.4rem;
`
