import React from 'react'
import Svg from 'react-svg'
import Icon from './'
import { storiesOf } from '@storybook/react'
import { number, text, color } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/dist/react'

storiesOf('📦 Components/Icon', module)
    .addDecorator(centered)
    .add('Default', () => (
        <React.Fragment>

            <Icon className="story-icon"
                count={number('count', 0)}
                label={text('label', '')}
                svg={<Svg src={require('../Icon/svgs/thin/hanger.svg')} />}
            />

            <style>{`
                .story-icon {
                    font-size: ${number('size (px)', 30)}px;
                    color: ${color('color', 'black')};
                }    
            `}</style>
        </React.Fragment>
    ))
