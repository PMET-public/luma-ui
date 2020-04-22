import React from 'react'
import SearchBar from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, boolean, number } from '@storybook/addon-knobs'

storiesOf('📦 Components/SearchBar', module).add('Default', () => {
    const value = text('value', 'Shoes')
    const count = number('count', 99)
    const loading = boolean('loading', false)

    return (
        <SearchBar
            onUpdate={action(`onUpdate`)}
            onSearch={action(`onSubmit`)}
            count={`${count > 999 ? '+999' : count} ${count === 0 || count > 1 ? 'results' : 'result'}`}
            loading={loading}
            value={value}
            clearButton={boolean('clearButton', true)}
            style={{ margin: '0 2rem' }}
        />
    )
})
