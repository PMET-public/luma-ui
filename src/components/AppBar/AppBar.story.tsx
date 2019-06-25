import React from 'react'
import { storiesOf } from '@storybook/react'
import { AppBar } from '.'
import { number } from '@storybook/addon-knobs'

storiesOf('📦 Components/AppBar', module)
    .add('Default', () => (
        <div className="story">
            <AppBar hideOnOffset={number('hideOnScroll', 200)}>
                <h1>AppBar</h1>
            </AppBar>

            <style jsx>{`
                .story {
                    background-color: #ddd;
                    height: 300vh;
                }

                .story::after {
                    content: '↑ scroll ↓';
                    position: fixed;
                    top: 40%;
                    text-align: center;
                    width: 100%;
                    opacity: 0.25;
                    font-weight: 600;
                }
            `}</style>
        </div>
    ))
