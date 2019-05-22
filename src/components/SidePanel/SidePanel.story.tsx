import React from 'react'
import SidePanel from './'
import { action } from '@storybook/addon-actions'
import { boolean, select } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/SidePanel', module)
    .add('Default', () => (
        <SidePanel
            position={ select('position', { left: 'left', right: 'right' }, 'left', 'props') }
            isOpen={ boolean('isOpen', false, 'props') }
            onClickClose={ action('onClickClose') }
        />
    ))
