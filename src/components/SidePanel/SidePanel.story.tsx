import React from 'react'
import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import { SidePanel } from 'src/components/SidePanel'

storiesOf('Components/SideNav', module)
    .add('React', () => (
        <SidePanel
            position={select('position', { left: 'left', right: 'right' }, 'left')}
            isOpen={boolean('isOpen', true)}
            onClickClose={action('onClickClose')} />
    ))