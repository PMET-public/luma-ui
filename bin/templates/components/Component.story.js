const source = require('common-tags').source

module.exports = (Name, folder = 'components') => {
    labels = {
        components: '📦 Components',
        pages: '📑 Pages',
    }

    return (
        source`

        import React from 'react'
        import FooBar from './'
        import { storiesOf } from '@storybook/react'
       
        storiesOf('📦 Components/FooBar', module).add('Default', () => <FooBar />)
        

    ` + '\n'
    )
}
