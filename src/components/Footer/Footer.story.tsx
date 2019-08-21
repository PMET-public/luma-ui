import React from 'react'
import Footer from './'
import { storiesOf } from '@storybook/react'
import { Story, StoryGlobalStyles } from '../../../.storybook/lib/Story.styled'
import styled from 'styled-components'
import { FooterProps } from './Footer'

const StoryContainer = styled(Story)`
    /* Story Styles */
    padding: 2rem;
`

const FooterMockData: FooterProps = {
    copyright: '© 2019 Magento, Inc. All Rights Reserved.',
    menu: [
        { text: 'Blog', as: 'a', href: '#' },
        { text: 'About', as: 'a', href: '#' },
        { text: 'Orders & Returns', as: 'a', href: '#' },
        { text: 'Customer Service', as: 'a', href: '#' },
        { text: 'Contact', as: 'a', href: '#' },
        { text: 'Privacy Policy', as: 'a', href: '#' },
        { text: 'Terms of Use', as: 'a', href: '#' },
    ],
    social: {
        facebook: { title: 'Facebook', as: 'a', href: 'https://facebook.com', target: 'blank' },
        twitter: { title: 'Twitter', as: 'a', href: 'https://twitter.com', target: 'blank' },
        pinterest: { title: 'Pinterest', as: 'a', href: 'https://pinterest.com', target: 'blank' },
        instragram: { title: 'Instagram', as: 'a', href: 'https://instagram.com', target: 'blank' },
    },
}
storiesOf('📦 Components/Footer', module).add('Default', () => (
    <StoryContainer>
        <StoryGlobalStyles />

        <Footer {...FooterMockData} />
    </StoryContainer>
))
