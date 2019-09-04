import React from 'react'
import Image from './'
import { storiesOf } from '@storybook/react'
import { text, number, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Image', module)
    .add('Default', () => (
        <Image
            alt={text('alt', 'Lorem')}
            src={text('src', require('../../../public/images/banner-1.jpg'))}
            height={number('height', 400)}
            width={number('width', 600)}
            vignette={number('vignette', 0)}
            transition={boolean('transition', true)}
        />
    ))
    .add('w/ Mobile Image', () => (
        <Image
            alt={text('alt', 'Lorem')}
            src={{
                mobile: require('../../../public/images/banner-1--mobile.jpg'),
                desktop: require('../../../public/images/banner-1.jpg'),
            }}
            height={number('height', 400)}
            width={number('width', 600)}
            vignette={number('vignette', 0)}
            transition={boolean('transition', true)}
        />
    ))
    .add('Broken URL', () => (
        <Image
            alt={text('alt', 'Lorem')}
            src={text('src', 'notfound.jpeg')}
            height={number('height', 400)}
            width={number('width', 600)}
            vignette={number('vignette', 0)}
            transition={boolean('transition', true)}
        />
    ))
