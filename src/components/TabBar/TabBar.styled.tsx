import styled from 'styled-components'

import IconComponent from '../Icon'

export const Root = styled.nav`
    background-color: ${props => props.theme.colors.surface};
    box-shadow: inset 0 0.1rem 0 rgba(0, 0, 0, 0.07), inset 0 0.2rem 0 rgba(255, 255, 255, 0.07);
    color: ${props => props.theme.colors.onSurface};
    display: grid;
    grid-auto-flow: column;
    grid-gap: 2rem;
    padding: 1.3rem 0;
    width: 100%;

    /** iOS X paddings */
    @supports (padding: max(0px)) {
        padding-bottom: max(1.3rem, env(safe-area-inset-bottom));
        padding-left: max(0, env(safe-area-inset-left));
        padding-right: max(0, env(safe-area-inset-right));
    }
`

export const Item = styled.div<{ active?: boolean }>`
    align-items: center;
    color: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    font-size: 2.3rem;
    justify-content: center;
    opacity: ${props => (props.active ? '1' : ' 0.5')};
`

export const Icon = styled(IconComponent)``
