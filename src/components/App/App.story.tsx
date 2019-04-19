import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { FlashMessageProps } from 'src/components/FlashMessage'
import { App } from 'src/components/App'

const flashMessage: FlashMessageProps = {
    type: 'info',
    message: 'Hello ',
    onClose: action('onClose')
}

storiesOf('Components/App', module)
    .add('React', () => (
        <App flashMessage={boolean('Flash Message', false) ? flashMessage : undefined} />
    ))