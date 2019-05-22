import React from 'react'
import ClodeBlock from '.'
import centered from '@storybook/addon-centered/react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs';

storiesOf('📦 Components/ClodeBlock', module)
    .addDecorator(centered)
    .add('Default', () => (
        <React.Fragment>
            <ClodeBlock language={text('label', null, 'props')}>
                {text('children', 'Pssst! Copy me.', 'props')}
            </ClodeBlock>
        </React.Fragment>
    ))

