import React from 'react'
import Quote from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Quote', module).add('Default', () => <Quote quote="Go for it, go for it." author="Frank Reynolds" description="It's Always Sunny in Philadelphia" />)
