import React from 'react'
import Header, { HeaderLogo, HeaderPrimaryNavigation, HeaderSecondaryNavigation } from './'
import { storiesOf } from '@storybook/react'
import Icon from '../Icon'
import Logo from '../../../public/images/new-luma.svg'
import IconSearch from '../Icon/svgs/thin/magnifier.svg'
import IconBasket from '../Icon/svgs/thin/basket.svg'

storiesOf('📦 Components/Header', module)
    .add('Default', () => (
        <div style={{ padding: '2rem' }}>
            <Header>
                <HeaderLogo>
                    <Logo height="35" />
                </HeaderLogo>

                <HeaderSecondaryNavigation>
                    <a href="#">New In</a>
                    <a href="#">Best Sellers</a>
                    <a href="#">Categories</a>
                    <a href="#">Shop the Look</a>
                </HeaderSecondaryNavigation>
                
                <HeaderPrimaryNavigation>
                    <Icon>
                        <IconSearch arial-label="Search" />
                    </Icon>
                    
                    <Icon count={2}>
                        <IconBasket aria-label="My Basket" />
                    </Icon>
                </HeaderPrimaryNavigation>
            </Header>
        </div>
))
