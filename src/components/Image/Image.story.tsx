import React from 'react'
import Image from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { ImageCaption } from './ImageCaption'
import { ImageTitle } from './ImageTitle'

storiesOf('📦 Components/Image', module)
    .add('Default', () => (
        <Image src={text('src', require('../../../public/images/selfie.jpeg'))} alt={text('alt', 'Lorem')}>
            <ImageTitle>{text('title', '')}</ImageTitle>
            <ImageCaption>{text('caption', '')}</ImageCaption>
        </Image>
    ))
