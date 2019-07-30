import React from 'react'
import Accordion from './'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

storiesOf('📦 Components/Accordion', module)
    .add('Default', () => (
        <div className="story">
            <Accordion selected={number('selected', 0)}>
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

            <style jsx global>{`
                .content {
                    font-size: 10rem;
                }
            `}</style>
        </div>
    ))
