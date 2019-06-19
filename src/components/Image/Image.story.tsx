import React from 'react'
import Image from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Image', module)
    .add('Default', () => (
        <Image className="foo-image"
            src={text('src', require('../../../public/images/selfie.jpeg'))} 
            alt={text('alt', 'Lorem')}
            caption={text('caption', '')}
            title={text('title', '')}
        />
    ))
