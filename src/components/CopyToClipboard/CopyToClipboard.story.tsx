import React from 'react'
import CopyToClipboard from '.'
import centered from '@storybook/addon-centered/react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs';

storiesOf('Components/CopyToClipboard', module)
    .addDecorator(centered)
    .add('React', () => (
        <React.Fragment>
            <CopyToClipboard label={text('label', null, 'props')}>
                {text('children', 'Pssst! Copy me.', 'props')}
            </CopyToClipboard>
        </React.Fragment>
    ))

