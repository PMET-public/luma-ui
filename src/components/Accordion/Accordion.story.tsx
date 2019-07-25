import React from 'react'
import Accordion from './'
import { storiesOf } from '@storybook/react'
import { number } from '@storybook/addon-knobs'

storiesOf('📦 Components/Accordion', module)
    .add('Default', () => (
        <div className="story">
            <Accordion selected={number('selected', 0)}>
                <Accordion.Item label={<h3>Label</h3>}>
                    <div className="content">
                        👋
                    </div>
                </Accordion.Item>
                <Accordion.Item label={<h3>Dos</h3>}>
                    <div className="content">
                        👐
                    </div>
                </Accordion.Item>
                <Accordion.Item label={<h3>Tres</h3>} active>
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
