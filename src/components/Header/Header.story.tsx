import React from 'react'
import Header from './'
import { storiesOf } from '@storybook/react'
import Icon from '../Icon'
import Logo from '../../../public/images/new-luma.svg'
import IconSearch from '../Icon/svgs/thin/magnifier.svg'
import IconBasket from '../Icon/svgs/thin/basket.svg'

storiesOf('📦 Components/Header', module)
    .add('Default', () => (
        <div style={{ padding: '2rem' }}>
            <Header>
                <Header.Logo>
                    <a href="#">
                        <Logo height="30" />
                    </a>
                </Header.Logo>

                <Header.Menu>
                    <a href="#">New In</a>
                    <a href="#">Women</a>
                    <a href="#">Men</a>
                    <a href="#">Gear</a>
                    <a href="#">Training</a>
                    <a href="#">Gift Cards</a>
                </Header.Menu>
                
                <Header.Utilities>
                    <a href="#">Help</a>
                    <a href="#">My Account</a>
                   
                    <Icon>
                        <a href="#">
                            <IconSearch arial-label="Search" />
                        </a>
                    </Icon>
                
                    <Icon count={10}>
                        <a href="#">
                            <IconBasket aria-label="My Basket" />
                        </a>
                    </Icon>
                </Header.Utilities>
            </Header>
        </div>
))
