import styled from 'styled-components'

import ErrorIconSvg from 'remixicon/icons/System/error-warning-line.svg'
import OfflineIconSvg from 'remixicon/icons/Device/wifi-off-line.svg'
import NotFoundIconSvg from 'remixicon/icons/System/eye-close-line.svg'
import LockIconSvg from 'remixicon/icons/System/lock-password-fill.svg'

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

export const Content = styled.div`
    line-height: 1.6;
`

export const ErrorIcon = styled(ErrorIconSvg)`
    width: 8rem;
    height: auto;
    fill: ${props => props.theme.colors.onSurface50};
`

export const NotFoundIcon = styled(NotFoundIconSvg)`
    width: 8rem;
    height: auto;
    fill: ${props => props.theme.colors.onSurface50};
`
export const OfflineIcon = styled(OfflineIconSvg)`
    width: 8rem;
    height: auto;
    fill: ${props => props.theme.colors.onSurface50};
`

export const LockIcon = styled(LockIconSvg)`
    width: 8rem;
    height: auto;
    fill: ${props => props.theme.colors.onSurface50};
`
