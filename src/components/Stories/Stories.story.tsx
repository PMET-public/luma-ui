import React from 'react'
import Stories from '.'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/dist/react'

storiesOf('📦 Components/Stories', module)
    .addDecorator(centered)
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
