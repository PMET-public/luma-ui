import React from 'react'
import Filters from './'
import { storiesOf } from '@storybook/react'
import { FiltersGroupProps } from './Filters'

const filters: FiltersGroupProps[] = [
    {
        label: 'Fashion',
        items: [
            {
                label: '14K Gold',
                count: 7,
                as: 'a',
                href: '#',
            },
            {
                label: 'Acrylic',
                count: 68,
                as: 'a',
                href: '#',
                active: true,
            },
            {
                label: 'Cashmere',
                count: 68,
                as: 'a',
                href: '#',
            },
            {
                label: 'Sterling Silver',
                count: 5,
                as: 'a',
                href: '#',
            },
            {
                label: 'Cotton',
                count: 437,
                as: 'a',
                href: '#',
            },
            {
                label: 'Linen',
                count: 187,
                as: 'a',
                href: '#',
            },
            {
                label: 'Leather',
                count: 16,
                as: 'a',
                href: '#',
            },
            {
                label: 'Nylon',
                count: 119,
                as: 'a',
                href: '#',
            },
            {
                label: 'Organic Cotton',
                count: 310,
                as: 'a',
                href: '#',
            },
            {
                label: 'Polyester',
                count: 140,
                as: 'a',
                href: '#',
            },
            {
                label: 'Rayon',
                count: 221,
                as: 'a',
                href: '#',
            },
            {
                label: 'Silk',
                count: 89,
                as: 'a',
                href: '#',
            },
            {
                label: 'Spandex',
                count: 220,
                as: 'a',
                href: '#',
            },
            {
                label: 'Viscose',
                count: 361,
                as: 'a',
                href: '#',
            },
            {
                label: 'Wool',
                count: 51,
                as: 'a',
                href: '#',
            },
        ],
    },
    {
        label: 'Style',
        items: [
            {
                label: 'Above Knee',
                count: 195,
                as: 'a',
                href: '#',
            },
            {
                label: 'Below Knee',
                count: 68,
                as: 'a',
                href: '#',
            },
            {
                label: 'Ankle Length',
                count: 85,
                as: 'a',
                href: '#',
            },
            {
                label: 'Halter Top',
                count: 34,
                as: 'a',
                href: '#',
            },
            {
                label: 'Short Sleeve',
                count: 204,
                as: 'a',
                href: '#',
                active: true,
            },
            {
                label: 'Sleeveless',
                count: 170,
                as: 'a',
                href: '#',
            },
            {
                label: 'Long Sleeve',
                count: 102,
                as: 'a',
                href: '#',
            },
            {
                label: '3/4 Sleeve',
                count: 102,
                as: 'a',
                href: '#',
            },
            {
                label: 'Slim Fit',
                count: 38,
                as: 'a',
                href: '#',
            },
            {
                label: 'Wide Leg',
                count: 51,
                as: 'a',
                href: '#',
            },
            {
                label: 'Capri',
                count: 21,
                as: 'a',
                href: '#',
            },
            {
                label: 'Full Length',
                count: 255,
                as: 'a',
                href: '#',
            },
            {
                label: 'Straight Leg',
                count: 51,
                as: 'a',
                href: '#',
            },
            {
                label: 'Open Front',
                count: 119,
                as: 'a',
                href: '#',
            },
            {
                label: 'Crew',
                count: 153,
                as: 'a',
                href: '#',
            },
            {
                label: 'Hooded',
                count: 17,
                as: 'a',
                href: '#',
            },
            {
                label: 'Scoopneck',
                count: 51,
                as: 'a',
                href: '#',
            },
            {
                label: 'V-neck',
                count: 34,
                as: 'a',
                href: '#',
            },
            {
                label: 'Button-down',
                count: 51,
                as: 'a',
                href: '#',
            },
        ],
    },
    {
        label: 'Color',
        items: [
            {
                label: 'Gold',
                count: 72,
                as: 'a',
                href: '#',
            },
            {
                label: 'Peach',
                count: 156,
                as: 'a',
                href: '#',
            },
            {
                label: 'Khaki',
                count: 144,
                as: 'a',
                href: '#',
            },
            {
                label: 'Silver',
                count: 6,
                as: 'a',
                href: '#',
            },
            {
                label: 'Lilac',
                count: 223,
                as: 'a',
                href: '#',
            },
            {
                label: 'Rain',
                count: 223,
                as: 'a',
                href: '#',
            },
            {
                label: 'Mint',
                count: 134,
                as: 'a',
                href: '#',
            },
            {
                label: 'Lily',
                count: 97,
                as: 'a',
                href: '#',
            },
            {
                label: 'Latte',
                count: 91,
                as: 'a',
                href: '#',
            },
            {
                label: 'Cocoa',
                count: 16,
                as: 'a',
                href: '#',
            },
        ],
    },
    {
        label: 'Has Video',
        items: [
            {
                label: 'Yes',
                count: 18,
                as: 'a',
                href: '#',
            },
            {
                label: 'No',
                count: 1133,
                as: 'a',
                href: '#',
            },
        ],
    },
]

storiesOf('📦 Components/Filters', module)
    .add('Default', () => (
        <div className='story'>
            <Filters>
                {filters.map((item, index) => (
                    <Filters.Group key={index} {...item} />
                ))}
            </Filters>

            <style jsx global>{`
                .story {
                    padding: 3rem;
                    display: inline-flex;
                }
            `}</style>
        </div>
    ))
