import React from 'react'
import Stories from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Stories', module)
    .add('Default', () => (
        <Stories label='Shop the Look'
            items={[
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Minimalist',
                    url: '#',
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Beachy',
                    url: '#',
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Dress Time',
                    url: '#',
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Essentials',
                    url: '#',
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Carefree',
                    url: '#',
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'All Day',
                    url: '#',
                },
                {
                    imageUrl: require('../../../public/images/selfie.jpeg'),
                    label: 'Ageless',
                    url: '#',
                },
            ]} />
    ))
