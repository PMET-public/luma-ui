import React from 'react'
import Image from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Image', module)
    .add('Default', () => (
        <Image src={text('src', require('../../../public/images/selfie.jpeg'))} alt={text('alt', 'Lorem')}>
            <Image.Title>{text('title', '')}</Image.Title>
            <Image.Caption>{text('caption', '')}</Image.Caption>
        </Image>
    ))
