import React from 'react'
import Dropdown from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Dropdown', module)
    .add('Default', () => (
        <div className="story">
            <Dropdown>
                <Dropdown.Label>
                    <a href="#" target="blank">Hover me</a>
                </Dropdown.Label>
                <Dropdown.Content>
                        I'm what's inside
                </Dropdown.Content>
            </Dropdown>

            <Dropdown>
                <Dropdown.Label>
                    <a href="#" target="blank">... and me!</a>
                </Dropdown.Label>
                <Dropdown.Content>
                    <div style={{ fontSize: '5rem'}}>
                        🥴
                    </div>
                </Dropdown.Content>
            </Dropdown>
            
            <style jsx global>{`
                .theme-container {
                    background-color: #eee;
                    height: 100vh;
                }
                .story {
                    padding: 3rem;
                    display: grid;
                    grid-gap: 3rem;
                    grid-auto-flow: column;
                    grid-auto-columns: max-content;
                }
            `}</style>
        </div>

    ))
