import React from 'react'
import Header from './'
import { storiesOf } from '@storybook/react'
import Icon from '../Icon'
import Logo from '../../../public/images/new-luma.svg'
import IconSearch from '../Icon/svgs/thin/magnifier.svg'
import IconBasket from '../Icon/svgs/thin/basket.svg'
import Dropdown from '../Dropdown'

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
                    <Dropdown>
                        <Dropdown.Label>
                            <a href="#">New In</a>
                        </Dropdown.Label>
                        <Dropdown.Content>
                            Yay!
                        </Dropdown.Content>
                    </Dropdown>
                    <a href="#">Best Sellers</a>
                    <a href="#">Categories</a>
                    <a href="#">Categories</a>
                    <a href="#">Categories</a>
                    <a href="#">Shop the Look</a>
                </Header.Menu>
                
                <Header.Utilities>
                    <a href="#">Help</a>

                    <Dropdown>
                        <Dropdown.Label>
                            <a href="#">Katherina</a>
                        </Dropdown.Label>
                        <Dropdown.Content isMenu={true}>
                            <a href="#">My Account</a>
                            <a href="#">Favorites</a>
                            <a href="#">Sign Out</a>
                        </Dropdown.Content>
                    </Dropdown>

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
