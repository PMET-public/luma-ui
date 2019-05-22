import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from '../utilities/ColorSwatch'
import centered from '@storybook/addon-centered/react'

storiesOf('💅 Styles/🎨 Colors', module)
    .addDecorator(centered)
    .add('Theme', () => (
        <Fragment>
    
            <div className="container grid global-colors color-background">
                <ColorSwatch color="background" />
                <ColorSwatch color="surface" />
                <ColorSwatch color="primary" />
                <ColorSwatch color="secondary" />
                <ColorSwatch color="error" />
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .global-colors {
                        --columns: 2;
                    }
                }

                @media (min-width: 1224px) {
                    .global-colors {
                        --columns: 3;
                    }
                }
            `}</style>
        </Fragment>
    ))

