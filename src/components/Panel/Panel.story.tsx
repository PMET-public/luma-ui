import React from 'react'
import Panel from './'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Panel', module)
    .add('Default', () => (
        <div>
            <Panel 
                position={select('position', { left: 'left', right: 'right' }, 'left')} 
                isOpen={boolean('isOpen', true)}
                onClose={action('onClose')}
            />
        </div>
    ))
