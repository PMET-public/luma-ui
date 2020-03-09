import React from 'react'
import SlickSlider from './'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import styled from 'styled-components'

const Item = styled.div`
    align-items: center;
    justify-content: center;
    color: #fff;
    display: flex;
    height: 50vh;
    font-size: 4rem;
    background-color: ${props => props.theme.colors.primary25};
`

storiesOf('📦 Components/SlickSlider', module).add('Default', () => (
    <SlickSlider
        gap={2}
        {...object('settings', {
            accessibility: true,
            centerMode: true,
            arrows: true,
            centerPadding: '40px',
            slidesToShow: 3,
        })}
    >
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
        <Item>4</Item>
        <Item>5</Item>
        <Item>6</Item>
    </SlickSlider>
))
