import styled from 'styled-components'
import { FieldWrapper, FieldLabel, FieldInput, FieldError } from '../FormBuilder.styled'

import CarretIconSvg from 'remixicon/icons/System/arrow-drop-down-line.svg'

export const Root = FieldWrapper

export const SelectFieldWrapper = styled.span`
    position: relative;
    width: 100%;

    &::after {
        content: '';
        position: absolute;
        top: calc(50% - 0.2em);
        right: 0.5em;
        width: 0;
        height: 0;
        display: inline-block;
        border: 0.3em solid transparent;
        border-top-color: ${props => props.theme.colors.onSurface75};
    }
`

export const SelectField = styled(FieldInput)`
    width: 100%;
    border-radius: 0;
    appearance: none;
    cursor: pointer;
    padding-right: 1.65em;

    & option {
        background-color: initial;
        color: initial;
        font-size: initial;
    }
`

export const Label = FieldLabel

export const Error = FieldError

export const CarretIcon = styled(CarretIconSvg)`
    fill: currentColor;
    width: 2.4rem;
    height: 2.4rem;
`
