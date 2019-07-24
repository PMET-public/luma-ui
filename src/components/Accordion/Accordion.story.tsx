import React from 'react'
import Accordion from './'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

storiesOf('📦 Components/Accordion', module)
    .add('Default', () => (
        <div className="story">
            <Accordion selected={number('init', 0)}>
                <Accordion.Item label="Uno">
                    <div className="content">
                        👋
                    </div>
                </Accordion.Item>
                <Accordion.Item label="Dos">
                    <div className="content">
                        👐
                    </div>
                </Accordion.Item>
                <Accordion.Item label="Tres">
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
