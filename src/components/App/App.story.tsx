import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { FlashMessageProps } from '../FlashMessage'
import App from './'

const flashMessage: FlashMessageProps = {
    type: 'info',
    message: 'Hello ',
    onClose: action('onClose')
}

storiesOf('Components/App', module)
    .add('React', () => (
        <App flashMessage={boolean('Flash Message', false) ? flashMessage : undefined} />
    ))