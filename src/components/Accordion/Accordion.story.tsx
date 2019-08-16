import React from 'react'
import Accordion from './'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

storiesOf('📦 Components/Accordion', module)
    .add('Default', () => (
        <Accordion
            selected={number('selected', 0)}
            style={{
                fontSize: '4rem',
            }}
        >
            <Accordion.Item label={{
                as: 'h3',
                text: 'Uno',
            }}>
                <div className="content">
                    👋
                    </div>
            </Accordion.Item>
            <Accordion.Item label={{
                as: 'h3',
                text: 'Dos',
            }}>
                <div className="content">
                    👐
                    </div>
            </Accordion.Item>
            <Accordion.Item label={{
                as: 'h3',
                text: 'Tres',
            }}>
                <div className="content">
                    🥴
                    </div>
            </Accordion.Item>
        </Accordion>
    ))
