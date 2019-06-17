import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toolbar } from './'
import { number } from '@storybook/addon-knobs'

storiesOf('📦 Components/Toolbar', module)
    .add('Default', () => (
        <React.Fragment>
            <Toolbar hideOnOffset={number('hideOnScroll', 100)}>
                <h1>Toolbar</h1>
            </Toolbar>

            <style>{`
                body {
                    background-color: #ddd;
                    height: 300vh;
                }

                body::after {
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
