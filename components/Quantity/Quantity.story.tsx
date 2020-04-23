import React from 'react'
import Quantity from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Quantity', module)
    .add('Default', () => <Quantity addLabel="Add" removeLabel="Remove" onUpdate={action('onUpdate')} />)
    .add('w/ Remove', () => <Quantity addLabel="Add" removeLabel="Remove" onUpdate={action('onUpdate')} onRemove={action('onRemove')} />)
