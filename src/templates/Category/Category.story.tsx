import React from 'react'
import Category, { CategoryProps } from '../Category'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { text } from '@storybook/addon-knobs'

export const ProductListMockData: CategoryProps = {
    title: {
        as: 'h2',
        text: 'Hoodies & Sweatshirts',
    },
    breadcrumbs: {
        items: [{ as: 'a', href: '#', text: 'Women' }, { as: 'a', href: '#', text: 'Tops' }],
    },
    categories: {
        items: [
            {
                as: 'a',
                href: '#',
                text: 'Tops',
                count: 2,
            },
            {
                as: 'a',
                href: '#',
                text: 'Bottoms',
                count: 13,
            },
            {
                as: 'a',
                href: '#',
                text: 'Hoodies & Sweaters',
                count: 100,
            },
        ],
    },
    filters: {
        label: 'Filters',
        open: false,
        closeButton: {
            text: 'Done',
        },
        groups: [
            {
                title: 'Fashion',
                items: [
                    {
                        text: '14K Gold',
                        count: 7,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Acrylic',
                        count: 68,
                        as: 'a',
                        href: '#',
                        active: true,
                    },
                    {
                        text: 'Cashmere',
                        count: 68,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Sterling Silver',
                        count: 5,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Cotton',
                        count: 437,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Linen',
                        count: 187,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Leather',
                        count: 16,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Nylon',
                        count: 119,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Organic Cotton',
                        count: 310,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Polyester',
                        count: 140,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Rayon',
                        count: 221,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Silk',
                        count: 89,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Spandex',
                        count: 220,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Viscose',
                        count: 361,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Wool',
                        count: 51,
                        as: 'a',
                        href: '#',
                    },
                ],
            },
            {
                title: 'Style',
                items: [
                    {
                        text: 'Above Knee',
                        count: 195,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Below Knee',
                        count: 68,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Ankle Length',
                        count: 85,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Halter Top',
                        count: 34,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Short Sleeve',
                        count: 204,
                        as: 'a',
                        href: '#',
                        active: true,
                    },
                    {
                        text: 'Sleeveless',
                        count: 170,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Long Sleeve',
                        count: 102,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: '3/4 Sleeve',
                        count: 102,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Slim Fit',
                        count: 38,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Wide Leg',
                        count: 51,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Capri',
                        count: 21,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Full Length',
                        count: 255,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Straight Leg',
                        count: 51,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Open Front',
                        count: 119,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Crew',
                        count: 153,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Hooded',
                        count: 17,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Scoopneck',
                        count: 51,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'V-neck',
                        count: 34,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Button-down',
                        count: 51,
                        as: 'a',
                        href: '#',
                    },
                ],
            },
            {
                title: 'Color',
                items: [
                    {
                        text: 'Gold',
                        count: 72,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Peach',
                        count: 156,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Khaki',
                        count: 144,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Silver',
                        count: 6,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Lilac',
                        count: 223,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Rain',
                        count: 223,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Mint',
                        count: 134,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Lily',
                        count: 97,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Latte',
                        count: 91,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'Cocoa',
                        count: 16,
                        as: 'a',
                        href: '#',
                    },
                ],
            },
            {
                title: 'Has Video',
                items: [
                    {
                        text: 'Yes',
                        count: 18,
                        as: 'a',
                        href: '#',
                    },
                    {
                        text: 'No',
                        count: 1133,
                        as: 'a',
                        href: '#',
                    },
                ],
            },
        ],
    },
    products: {
        items: new Array(10).fill(true).map(() => ({
            image: {
                alt: '',
                src: require('../../../public/images/product-item-sample.jpg'),
            },
            price: {
                regular: 49.99,
                special: 39.99,
                label: 'Starting at',
            },
            title: {
                text: 'Circle Hooded Ice Flee',
            },
            colors: [
                { label: 'brown', value: 'brown' },
                { label: 'gray', value: 'gray' },
                { label: 'black', value: 'black' },
                { label: 'blue', value: 'blue' },
            ],
        })),
    },
    pageBuilder: {
        html: text(
            'PageBuilder HTML',
            `<div data-content-type=\"row\" data-appearance=\"full-bleed\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{\\&quot;desktop_image\\&quot;:\\&quot;${require('../../../public/images/banner-2.1.jpg')}\\&quot;}\" data-element=\"main\" style=\"justify-content: flex-end; display: flex; flex-direction: column; background-position: center; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; text-align: left; border-style: none; border-width: 1px; border-radius: 0px; min-height: 600px; margin: 0px 0px 10px; padding: 20px; color: white;\"><h2 data-content-type=\"heading\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px;\">TWICE AROUND. TWICE AS NICE.</h2><div data-content-type=\"text\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 10px 0px; padding: 0px;\"><p>Find conscientious, comfy clothing in our eco-friendly collection</p></div><div data-content-type=\"buttons\" data-appearance=\"inline\" data-same-width=\"false\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;\"><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><div class=\"pagebuilder-button-primary\" data-element=\"empty_link\"><span data-element=\"link_text\">Shop Performance</span></div></div></div></div>`
        ),
    },
}

storiesOf('📑 Templates/Category', module).add(
    'Default',
    () => (
        <App {...AppMockData}>
            <Category {...ProductListMockData} />
        </App>
    ),
    {
        theme: {
            layout: 'fullPage',
        },
    }
)
