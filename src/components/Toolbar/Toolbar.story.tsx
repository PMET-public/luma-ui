import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toolbar, ToolbarActions } from './'
import Icon from '../Icon'
import { number } from '@storybook/addon-knobs'

storiesOf('📦 Components/Toolbar', module)
    .add('Default', () => (
        <React.Fragment>
            <Toolbar 
                logoSrc="images/new-luma.svg" 
                storeName="Luma" 
                storeUrl="#"
                hideOnOffset={number('hideOnScroll', 100)}
            >
                <ToolbarActions type="primary">
                    <a href="#">What's New</a>
                    <a href="#">Catalog</a>
                    <a href="#">Sale</a>
                    <a href="#">Gift Cards</a>
                </ToolbarActions>

                <ToolbarActions type="secondary">

                    <a href="">
                        Live Chat
                    </a>

                    <a href="">
                        Account
                    </a>

                    <a href="">
                        <Icon name="search" size={22} />
                    </a>

                    <a href="">
                        <Icon name="basket" size={24} count={1} />
                    </a>
                </ToolbarActions>
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
