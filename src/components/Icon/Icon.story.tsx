import React from 'react'
import Icon from './'
import { storiesOf } from '@storybook/react'
import { number, text, color } from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/dist/react'

storiesOf('📦 Components/Icon', module)
    .addDecorator(centered)
    .add('Default', () => (
        <React.Fragment>

            <Icon className="story-icon"
                label={text('label', '')}
                count={number('count', 0)}
                src={require('./svgs/thin/gift.svg')}
            />

            <style>{`
                .story-icon {
                    font-size: ${number('size (px)', 30)}px;
                    color: ${color('color', 'black')};
                }    
            `}</style>
        </React.Fragment>
    ))
