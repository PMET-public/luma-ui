import React from 'react'
import Filters from './'
import { storiesOf } from '@storybook/react'
import { FiltersItemProps } from './Filters'

const filters: FiltersItemProps[] = [
    // {
    //     label: 'Category',
    //     link: { href: '#', alt: '' },
    //     items: [
    //         {
    //             label: 'Bottoms',
    //             link: { href: '#', alt: '' },
    //             count: 24,
    //         },
    //         {
    //             label: 'Tops',
    //             link: { href: '#', alt: '' },
    //             count: 24,
    //         },
    //         {
    //             label: 'Dresses',
    //             link: { href: '#', alt: '' },
    //             count: 12,
    //         },
    //         {
    //             label: 'Accessories',
    //             link: { href: '#', alt: '' },
    //             count: 22,
    //         },
    //         {
    //             label: 'Shop The Look',
    //             link: { href: '#', alt: '' },
    //             count: 10,
    //         },
    //     ],
    // },
    {
        label: 'Fashion',
        items: [
            {
                label: '14K Gold',
                link: { href: '#', alt: '' },
                count: 7,
            },
            {
                label: 'Acrylic',
                link: { href: '#', alt: '' },
                count: 68,
                active: true,
            },
            {
                label: 'Cashmere',
                link: { href: '#', alt: '' },
                count: 68,
            },
            {
                label: 'Sterling Silver',
                link: { href: '#', alt: '' },
                count: 5,
            },
            {
                label: 'Cotton',
                link: { href: '#', alt: '' },
                count: 437,
            },
            {
                label: 'Linen',
                link: { href: '#', alt: '' },
                count: 187,
            },
            {
                label: 'Leather',
                link: { href: '#', alt: '' },
                count: 16,
            },
            {
                label: 'Nylon',
                link: { href: '#', alt: '' },
                count: 119,
            },
            {
                label: 'Organic Cotton',
                link: { href: '#', alt: '' },
                count: 310,
            },
            {
                label: 'Polyester',
                link: { href: '#', alt: '' },
                count: 140,
            },
            {
                label: 'Rayon',
                link: { href: '#', alt: '' },
                count: 221,
            },
            {
                label: 'Silk',
                link: { href: '#', alt: '' },
                count: 89,
            },
            {
                label: 'Spandex',
                link: { href: '#', alt: '' },
                count: 220,
            },
            {
                label: 'Viscose',
                link: { href: '#', alt: '' },
                count: 361,
            },
            {
                label: 'Wool',
                link: { href: '#', alt: '' },
                count: 51,
            },
        ],
    },
    {
        label: 'Style',
        items: [
            {
                label: 'Above Knee',
                link: { href: '#', alt: '' },
                count: 195,
            },
            {
                label: 'Below Knee',
                link: { href: '#', alt: '' },
                count: 68,
            },
            {
                label: 'Ankle Length',
                link: { href: '#', alt: '' },
                count: 85,
            },
            {
                label: 'Halter Top',
                link: { href: '#', alt: '' },
                count: 34,
            },
            {
                label: 'Short Sleeve',
                link: { href: '#', alt: '' },
                count: 204,
                active: true,
            },
            {
                label: 'Sleeveless',
                link: { href: '#', alt: '' },
                count: 170,
            },
            {
                label: 'Long Sleeve',
                link: { href: '#', alt: '' },
                count: 102,
            },
            {
                label: '3/4 Sleeve',
                link: { href: '#', alt: '' },
                count: 102,
            },
            {
                label: 'Slim Fit',
                link: { href: '#', alt: '' },
                count: 38,
            },
            {
                label: 'Wide Leg',
                link: { href: '#', alt: '' },
                count: 51,
            },
            {
                label: 'Capri',
                link: { href: '#', alt: '' },
                count: 21,
            },
            {
                label: 'Full Length',
                link: { href: '#', alt: '' },
                count: 255,
            },
            {
                label: 'Straight Leg',
                link: { href: '#', alt: '' },
                count: 51,
            },
            {
                label: 'Open Front',
                link: { href: '#', alt: '' },
                count: 119,
            },
            {
                label: 'Crew',
                link: { href: '#', alt: '' },
                count: 153,
            },
            {
                label: 'Hooded',
                link: { href: '#', alt: '' },
                count: 17,
            },
            {
                label: 'Scoopneck',
                link: { href: '#', alt: '' },
                count: 51,
            },
            {
                label: 'V-neck',
                link: { href: '#', alt: '' },
                count: 34,
            },
            {
                label: 'Button-down',
                link: { href: '#', alt: '' },
                count: 51,
            },
        ],
    },
    {
        label: 'Color',
        items: [
            {
                label: 'Gold',
                link: { href: '#', alt: '' },
                count: 72,
            },
            {
                label: 'Peach',
                link: { href: '#', alt: '' },
                count: 156,
            },
            {
                label: 'Khaki',
                link: { href: '#', alt: '' },
                count: 144,
            },
            {
                label: 'Silver',
                link: { href: '#', alt: '' },
                count: 6,
            },
            {
                label: 'Lilac',
                link: { href: '#', alt: '' },
                count: 223,
            },
            {
                label: 'Rain',
                link: { href: '#', alt: '' },
                count: 223,
            },
            {
                label: 'Mint',
                link: { href: '#', alt: '' },
                count: 134,
            },
            {
                label: 'Lily',
                link: { href: '#', alt: '' },
                count: 97,
            },
            {
                label: 'Latte',
                link: { href: '#', alt: '' },
                count: 91,
            },
            {
                label: 'Cocoa',
                link: { href: '#', alt: '' },
                count: 16,
            },
        ],
    },
    {
        label: 'Has Video',
        items: [
            {
                label: 'Yes',
                link: { href: '#', alt: '' },
                count: 18,
            },
            {
                label: 'No',
                link: { href: '#', alt: '' },
                count: 1133,
            },
        ],
    },
]

storiesOf('📦 Components/Filters', module)
    .add('Default', () => (
        <div className='story'>
            <Filters>
                {filters.map((item, index) => (
                    <Filters.Item key={index} {...item} />
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
