import React from 'react'
import Image from '.'
import { storiesOf } from '@storybook/react'
import { text, number } from '@storybook/addon-knobs'

storiesOf('📦 Components/Image', module)
    .add('Default', () => (
        <Image alt={text('alt', 'Lorem')} src={text('src', require('../../public/images/banner-1.jpg'))} height={number('height', 400)} width={number('width', 600)} vignette={number('vignette', 0)} />
    ))
    .add('w/ Mobile Image', () => (
        <Image
            alt={text('alt', 'Lorem')}
            src={{
                mobile: require('../../public/images/banner-1--mobile.jpg'),
                desktop: require('../../public/images/banner-1.jpg'),
            }}
            height={number('height', 400)}
            width={number('width', 600)}
            vignette={number('vignette', 0)}
        />
    ))
    .add('Broken URL', () => <Image alt={text('alt', 'Lorem')} src={text('src', 'notfound.jpeg')} height={number('height', 400)} width={number('width', 600)} vignette={number('vignette', 0)} />)
    .add('Vertical Scroll', () => (
        <div style={{ display: 'grid', gridGap: '100vh', padding: '10rem' }}>
            <Image alt="" src={require('../../public/images/banner-1.jpg')} height={400} width={600} />
            <Image alt="" src={require('../../public/images/banner-2.jpg')} height={400} width={600} />
        </div>
    ))
    .add('Horizontal Scroll', () => (
        <div style={{ display: 'flex', width: '50%', overflow: 'scroll' }}>
            <Image alt="" src={require('../../public/images/banner-1.jpg')} height={400} width={600} />
            <Image alt="" src={require('../../public/images/banner-2.jpg')} height={400} width={600} style={{ marginLeft: '100vw' }} />
        </div>
    ))
