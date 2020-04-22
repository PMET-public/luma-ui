import React from 'react'
import Filters, { FiltersProps } from '.'
import { storiesOf } from '@storybook/react'

const FiltersMockData: FiltersProps = {
    groups: [
        {
            title: 'Fashion',
            items: [
                {
                    as: 'a',
                    count: 7,
                    href: '#',
                    text: '14K Gold',
                },
                {
                    active: true,
                    as: 'a',
                    count: 68,
                    href: '#',
                    text: 'Acrylic',
                },
                {
                    as: 'a',
                    count: 68,
                    href: '#',
                    text: 'Cashmere',
                },
                {
                    as: 'a',
                    count: 5,
                    href: '#',
                    text: 'Sterling Silver',
                },
                {
                    as: 'a',
                    count: 437,
                    href: '#',
                    text: 'Cotton',
                },
                {
                    as: 'a',
                    count: 187,
                    href: '#',
                    text: 'Linen',
                },
                {
                    as: 'a',
                    count: 16,
                    href: '#',
                    text: 'Leather',
                },
                {
                    as: 'a',
                    count: 119,
                    href: '#',
                    text: 'Nylon',
                },
                {
                    as: 'a',
                    count: 310,
                    href: '#',
                    text: 'Organic Cotton',
                },
                {
                    as: 'a',
                    count: 140,
                    href: '#',
                    text: 'Polyester',
                },
                {
                    as: 'a',
                    count: 221,
                    href: '#',
                    text: 'Rayon',
                },
                {
                    as: 'a',
                    count: 89,
                    href: '#',
                    text: 'Silk',
                },
                {
                    as: 'a',
                    count: 220,
                    href: '#',
                    text: 'Spandex',
                },
                {
                    as: 'a',
                    count: 361,
                    href: '#',
                    text: 'Viscose',
                },
                {
                    as: 'a',
                    count: 51,
                    href: '#',
                    text: 'Wool',
                },
            ],
        },
        {
            title: 'Style',
            items: [
                {
                    as: 'a',
                    count: 195,
                    href: '#',
                    text: 'Above Knee',
                },
                {
                    as: 'a',
                    count: 68,
                    href: '#',
                    text: 'Below Knee',
                },
                {
                    as: 'a',
                    count: 85,
                    href: '#',
                    text: 'Ankle Length',
                },
                {
                    as: 'a',
                    count: 34,
                    href: '#',
                    text: 'Halter Top',
                },
                {
                    as: 'a',
                    count: 204,
                    href: '#',
                    text: 'Short Sleeve',
                    active: true,
                },
                {
                    as: 'a',
                    count: 170,
                    href: '#',
                    text: 'Sleeveless',
                },
                {
                    as: 'a',
                    count: 102,
                    href: '#',
                    text: 'Long Sleeve',
                },
                {
                    as: 'a',
                    count: 102,
                    href: '#',
                    text: '3/4 Sleeve',
                },
                {
                    as: 'a',
                    count: 38,
                    href: '#',
                    text: 'Slim Fit',
                },
                {
                    as: 'a',
                    count: 51,
                    href: '#',
                    text: 'Wide Leg',
                },
                {
                    as: 'a',
                    count: 21,
                    href: '#',
                    text: 'Capri',
                },
                {
                    as: 'a',
                    count: 255,
                    href: '#',
                    text: 'Full Length',
                },
                {
                    as: 'a',
                    count: 51,
                    href: '#',
                    text: 'Straight Leg',
                },
                {
                    as: 'a',
                    count: 119,
                    href: '#',
                    text: 'Open Front',
                },
                {
                    as: 'a',
                    count: 153,
                    href: '#',
                    text: 'Crew',
                },
                {
                    as: 'a',
                    count: 17,
                    href: '#',
                    text: 'Hooded',
                },
                {
                    as: 'a',
                    count: 51,
                    href: '#',
                    text: 'Scoopneck',
                },
                {
                    as: 'a',
                    count: 34,
                    href: '#',
                    text: 'V-neck',
                },
                {
                    as: 'a',
                    count: 51,
                    href: '#',
                    text: 'Button-down',
                },
            ],
        },
        {
            title: 'Color',
            items: [
                {
                    as: 'a',
                    count: 72,
                    href: '#',
                    text: 'Gold',
                },
                {
                    as: 'a',
                    count: 156,
                    href: '#',
                    text: 'Peach',
                },
                {
                    as: 'a',
                    count: 144,
                    href: '#',
                    text: 'Khaki',
                },
                {
                    as: 'a',
                    count: 6,
                    href: '#',
                    text: 'Silver',
                },
                {
                    as: 'a',
                    count: 223,
                    href: '#',
                    text: 'Lilac',
                },
                {
                    as: 'a',
                    count: 223,
                    href: '#',
                    text: 'Rain',
                },
                {
                    as: 'a',
                    count: 134,
                    href: '#',
                    text: 'Mint',
                },
                {
                    as: 'a',
                    count: 97,
                    href: '#',
                    text: 'Lily',
                },
                {
                    as: 'a',
                    count: 91,
                    href: '#',
                    text: 'Latte',
                },
                {
                    as: 'a',
                    count: 16,
                    href: '#',
                    text: 'Cocoa',
                },
            ],
        },
        {
            title: 'Has Video',
            items: [
                {
                    as: 'a',
                    count: 18,
                    href: '#',
                    text: 'Yes',
                },
                {
                    as: 'a',
                    count: 1133,
                    href: '#',
                    text: 'No',
                },
            ],
        },
    ],
}

storiesOf('📦 Components/Filters', module).add('Default', () => <Filters {...FiltersMockData} />)
