import React from 'react'
import { storiesOf } from '@storybook/react'
import { ToolBar } from '.'
import { number } from '@storybook/addon-knobs'

storiesOf('📦 Components/ToolBar', module)
    .add('Default', () => (
        <React.Fragment>
            <ToolBar hideOnOffset={number('hideOnScroll', 200)}>
                <h1>ToolBar</h1>
            </ToolBar>

            <style>{`
                .theme-container {
                    background-color: #ddd;
                    height: 300vh;
                }

                .theme-container::after {
                    content: '↑ scroll ↓';
                    position: fixed;
                    top: 40%;
                    text-align: center;
                    width: 100%;
                    opacity: 0.25;
                    font-weight: 600;
                }
            `}</style>
        </React.Fragment>
    ))
