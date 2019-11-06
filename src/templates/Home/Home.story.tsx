import React from 'react'
import Home from './'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { PageBuilderBannerMock, PageBuilderRowContainedMock } from '../../components/PageBuilder/PageBuilder.story'

storiesOf('📑 Templates/Home', module).add(
    'Default',
    () => (
        <App {...AppMockData}>
            <Home
                stories={{
                    items: [
                        {
                            as: 'a',
                            href: '#',
                            image: {
                                src: require('../../../public/images/fashion-thumb1.jpg'),
                            },
                            text: 'Minimalist',
                        },
                        {
                            as: 'a',
                            href: '#',
                            image: {
                                src: require('../../../public/images/fashion-thumb1.jpg'),
                            },
                            text: 'Minimalist',
                        },
                        {
                            as: 'a',
                            href: '#',
                            image: {
                                src: require('../../../public/images/fashion-thumb2.jpg'),
                            },
                            text: 'Dressy',
                        },
                        {
                            as: 'a',
                            href: '#',
                            image: {
                                src: require('../../../public/images/fashion-thumb3.jpg'),
                            },
                            text: 'Beachy',
                        },
                        {
                            as: 'a',
                            href: '#',
                            image: {
                                src: require('../../../public/images/fashion-thumb4.jpg'),
                            },
                            text: 'Biz Cas’',
                        },
                        {
                            as: 'a',
                            href: '#',
                            image: {
                                src: require('../../../public/images/fashion-thumb5.jpg'),
                            },
                            text: 'All Time',
                        },
                    ],
                }}
                pageBuilder={{
                    html: PageBuilderRowContainedMock(PageBuilderBannerMock()),
                }}
            />
        </App>
    ),
    {
        theme: {
            layout: 'fullPage',
        },
    }
)
