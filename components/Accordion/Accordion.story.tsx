import React from 'react'
import Accordion from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Accordion', module).add('Default', () => (
    <Accordion defaultSelected={0}>
        <Accordion.Item label="Uno">
            <span style={{ fontSize: '4rem' }}>👋</span>
        </Accordion.Item>
        <Accordion.Item label="Dos">
            <span style={{ fontSize: '4rem' }}>👐</span>
        </Accordion.Item>
        <Accordion.Item label="Tres">
            <span style={{ fontSize: '4rem' }}>🥴</span>
        </Accordion.Item>
    </Accordion>
))
