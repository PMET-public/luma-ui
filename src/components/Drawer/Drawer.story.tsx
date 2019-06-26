import React from 'react'
import Drawer from '.'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Drawer', module)
    .add('Default', () => (
        <div>
            <Drawer 
                position={select('position', { left: 'left', right: 'right' }, 'left')} 
                isOpen={boolean('isOpen', true)}
                onClose={action('onClose')}
            />
        </div>
    ))
