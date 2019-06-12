import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toolbar, ToolbarActions, ToolbarLink } from './'

storiesOf('📦 Components/Toolbar', module)
    .add('Default', () => (
        <React.Fragment>
            <Toolbar logoSrc="images/new-luma.svg" storeName="Luma" storeUrl="#">
                <ToolbarActions type="primary">
                    <ToolbarLink icon="shirt" label="Catalog" src="#" isActive={true} />
                    <ToolbarLink icon="heart" label="Favorites" src="#" count={2} />
                    <ToolbarLink icon="search" label="Search" src="#" />
                    <ToolbarLink icon="basket" label="Basket" src="#" count={3} />
                </ToolbarActions>

                <ToolbarActions type="nav">
                    <ToolbarLink icon="basket" label="Basket" src="#" count={3} />
                    <ToolbarLink label="What's New" src="#" />
                    <ToolbarLink label="Women" src="#" />
                </ToolbarActions>
                
                <ToolbarActions type="secondary">
                    <ToolbarLink icon="bubble" label="Help" src="#" />
                    <ToolbarLink icon="user" label="Account" src="#" />
                </ToolbarActions>
            </Toolbar>

            <style>{`
                :root {
                    background-image: url(${require('../../../public/images/selfie.jpeg')});
                    background-repeat: no-repeat;
                    background-size: 100vh;
                    background-position: top center;
                }
            `}</style>
        </React.Fragment>
    ))
