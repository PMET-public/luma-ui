import React from 'react'
import Stories from '.'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/dist/react'

const Link = ({ href, children }: any) => <a href={href}>{children}</a>

storiesOf('📦 Components/Stories', module)
    .addDecorator(centered)
    .add('Default', () => (
        <Stories 
            label='Shop the Look'
            routerLink={Link}
            items={[
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Minimalist',
                    route: { href: '#' },
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Beachy',
                    route: { href: '#' },
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Dress Time',
                    route: { href: '#' },
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Essentials',
                    route: { href: '#' },
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Carefree',
                    route: { href: '#' },
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'All Day',
                    route: { href: '#' },
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Ageless',
                    route: { href: '#' },
                },
            ]} />
    ))
