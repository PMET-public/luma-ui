import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import './Colors.story.less'
import ColorSwatch from './'

storiesOf('Global', module)
    .add('🎨 Colors', () => (
        <Fragment>
    
            <ul className="global-colors color-background">
                <li className="global-colors__swatch">
                    <ColorSwatch color="background" />
                </li>
                <li className="global-colors__swatch">
                    <ColorSwatch color="surface" />
                </li>
                <li className="global-colors__swatch">
                    <ColorSwatch color="primary" />
                </li>
                <li className="global-colors__swatch">
                    <ColorSwatch color="secondary" />
                </li>
                <li className="global-colors__swatch">
                    <ColorSwatch color="error" />
                </li>
            </ul>
        </Fragment>
    ))

