import React from 'react'
import Header from './'
import { storiesOf } from '@storybook/react'

import Logo from '../../../public/images/luma.svg'
import IconSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconBag from '@fortawesome/fontawesome-free/svgs/solid/shopping-bag.svg'

storiesOf('📦 Components/Header', module).add('Default', () => (
    <Header
        logo={{
            as: 'a',
            href: '#',
            title: 'Luma',
            svg: Logo,
        }}
        menu={{
            items: [
                {
                    as: 'a',
                    href: '#',
                    text: 'New In',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Women',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Men',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Gear',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Training',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Gift Cards',
                },
            ],
        }}
        utilities={{
            items: [
                {
                    as: 'a',
                    href: '#',
                    text: 'Help',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'My Account',
                },
                {
                    as: 'a',
                    href: '#',
                    icon: {
                        svg: IconSearch,
                    },
                    text: 'Search',
                },
                {
                    as: 'a',
                    href: '#',
                    icon: {
                        svg: IconBag,
                        count: 3,
                    },
                    text: 'My Basket',
                },
            ],
        }}
    />
))
