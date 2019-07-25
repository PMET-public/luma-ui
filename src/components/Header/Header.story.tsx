import React from 'react'
import Header from './'
import { storiesOf } from '@storybook/react'

import Logo from '../../../public/images/luma.svg'
import IconSearch from '@fortawesome/fontawesome-free/svgs/solid/search.svg'
import IconBag from '@fortawesome/fontawesome-free/svgs/solid/shopping-bag.svg'

storiesOf('📦 Components/Header', module)
    .add('Default', () => (
        <div style={{ padding: '2rem' }}>
            <Header 
                logo={{
                    as: 'a',
                    href: '#',
                    svg: Logo,
                }}
                menu={{
                    items: [
                        {
                            as: 'a',
                            href: '#',
                            label: 'New In',
                        },
                        {
                            as: 'a',
                            href: '#',
                            label: 'Women',
                        },
                        {
                            as: 'a',
                            href: '#',
                            label: 'Men',
                        },
                        {
                            as: 'a',
                            href: '#',
                            label: 'Gear',
                        },
                        {
                            as: 'a',
                            href: '#',
                            label: 'Training',
                        },
                        {
                            as: 'a',
                            href: '#',
                            label: 'Gift Cards',
                        },  
                    ],
                }}
                utilities={{
                    items: [
                        {
                            as: 'a',
                            href: '#',
                            label: 'Help',
                        },
                        {
                            as: 'a',
                            href: '#',
                            label: 'My Account',
                        },
                        {
                            as: 'a',
                            href: '#',
                            icon: {
                                svg: IconSearch,
                            },
                            label: 'Search',
                        },
                        {
                            as: 'a',
                            href: '#',
                            icon: {
                                svg: IconBag,
                                count: 3,
                            },
                            label: 'My Basket',
                        },
                    ],
                }}
            />
        </div>
))
