import React from 'react'
import Image from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Image', module)
    .add('Default', () => (
        <Image 
            alt={text('alt', 'Lorem')}
            src={text('src', require('../../../public/images/selfie.jpeg'))} 
        >
            {text('title', '')}
        </Image>
    ))
