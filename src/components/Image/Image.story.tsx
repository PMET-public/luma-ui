import React from 'react'
import Image from './'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

storiesOf('📦 Components/Image', module)
    .add('Default', () => (
        <Image 
            alt={text('alt', 'Lorem')}
            src={text('src', require('../../../public/images/selfie.jpeg'))} 
            height={number('height',  400)}
            width={number('width', 600)}
            vignette={number('vignette', 0)}
        >
            {text('caption', '')}
        </Image>
    ))
