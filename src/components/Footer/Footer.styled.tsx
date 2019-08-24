import styled from 'styled-components'

import IconTwitterSvg from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg'
import IconFacebookSvg from '@fortawesome/fontawesome-free/svgs/brands/facebook.svg'
import IconInstagramSvg from '@fortawesome/fontawesome-free/svgs/brands/instagram.svg'
import IconPinterestSvg from '@fortawesome/fontawesome-free/svgs/brands/pinterest.svg'

export const Root = styled.footer`
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.onBackground};
    display: grid;
    filter: opacity(0.65);
    font-size: 1.3rem;
    grid-gap: 3rem;
    padding: 3rem;
    width: 100%;

    & a {
        transition: opacity 205ms ease;
        &:hover {
            opacity: 0.5;
        }
    }
`

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
`

export const MenuLink = styled.span`
    margin: 1rem;
`

export const Social = styled.div`
    display: grid;
    font-size: 2.4rem;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-auto-rows: max-content;
    grid-gap: 2rem;
    justify-content: center;
`

export const SocialIcon = styled.span`
    fill: currentColor;
    height: 1em;
    width: 1em;
`

export const SocialIconPinterest = styled(IconPinterestSvg)``

export const SocialIconInstagram = styled(IconInstagramSvg)``

export const SocialIconTwitter = styled(IconTwitterSvg)``

export const SocialIconFacebook = styled(IconFacebookSvg)``

export const Copyright = styled.div`
    text-align: center;
    width: 100%;
`
