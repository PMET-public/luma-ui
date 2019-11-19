import styled from 'styled-components'

import DoubleCheckIconSvg from 'remixicon/icons/System/check-double-line.svg'
import ShoppingIconSvg from 'remixicon/icons/Finance/shopping-bag-3-fill.svg'

export const Root = styled.div`
    align-items: center;
    display: grid;
    height: 100%;
    justify-content: center;
    padding: 0 ${props => props.theme.layout.margin};
    text-align: center;
    width: 100%;
`

export const Wrapper = styled.div`
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 2rem;
`

export const Title = styled.div`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight.semi};
    font-size: ${props => props.theme.typography.heading.size.primary};
`

export const Content = styled.div`
    line-height: 1.6;
`

export const GraphicWrapper = styled.div`
    display: inline-block;
    position: relative;
    font-size: 3rem;
    color: ${props => props.theme.colors.accent75};
`

export const DoubleCheckIcon = styled(DoubleCheckIconSvg)`
    width: 3em;
    fill: currentColor;
    position: absolute;
    top: -2.4em;
    left: 1.6em;
`

export const ShoppingIcon = styled(ShoppingIconSvg)`
    width: 6em;
    fill: currentColor;
`
