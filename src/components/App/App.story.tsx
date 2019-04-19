import React from 'react'
import App from './'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { FlashMessageProps } from '../../components/FlashMessage'

const flashMessage: FlashMessageProps = {
    type: 'info',
    message: 'Hello ',
    onClose: action('onClose')
}

storiesOf('Components/App', module)
    .add('React', () => (
        <App flashMessage={boolean('Flash Message', false) ? flashMessage : undefined} />
    ))