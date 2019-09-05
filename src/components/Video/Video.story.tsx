import React from 'react'
import Video from '.'
import { storiesOf } from '@storybook/react'
import { boolean, number, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Video', module).add('Default', () => (
    <Video
        url={text('YouTube / Vimeo URL', 'https://player.vimeo.com/video/1084537?title=0&amp;byline=0&amp;portrait=')}
        width={number('width', 640)}
        height={number('height', 360)}
        fullWidth={boolean('fullWidth', false)}
    />
))

// https://player.vimeo.com/video/1084537?title=0&amp;byline=0&amp;portrait=
// https://www.youtube.com/embed/aqz-KE-bpKQ?rel=0
