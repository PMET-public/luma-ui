import React from 'react'
import TabBar from './'
import Icon from '../Icon'
import { storiesOf } from '@storybook/react'

const Link = ({ href, children }: any) => <a href={href}>{children}</a>

storiesOf('📦 Components/TabBar', module)
    .add('Default', () => (
        <TabBar 
            routerLink={Link}
            items={[
                {
                    isActive: true,
                    icon: <Icon label="Shop" src={require('../Icon/svgs/thin/hanger.svg')} />,
                    route: { href: '#shop' },
                },
                {
                    icon: <Icon label="Favorites" src={require('../Icon/svgs/thin/heart.svg')} count={3} />,
                    route: { href: '#favorites' },
                },
                {
                    icon: <Icon label="Search" src={require('../Icon/svgs/thin/magnifier.svg')} />,
                    route: { href: '#search' },
                },
                {
                    icon: <Icon label="Bag" src={require('../Icon/svgs/thin/bag.svg')} count={1} />,
                    route: { href: '#bag' },
                },
            ]} 
        />
    ))
