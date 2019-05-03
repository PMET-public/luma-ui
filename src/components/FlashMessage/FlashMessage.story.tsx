import React from 'react'
import FlashMessage from './'
// import centered from '@storybook/addon-centered/react'
import { action } from '@storybook/addon-actions'
import { select, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

storiesOf('Components/FlashMessage', module)
    // .addDecorator(centered)
    .add('React', () => (
        <FlashMessage
            type={select('type', { info: 'info', error: 'error', warning: 'warning' }, 'info')}
            message={text('message', 'Hello. Is this me you`re looking for?')}
            onClose={action('onClose')} />
    ))
