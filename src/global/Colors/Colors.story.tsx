import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from './'

storiesOf('Global', module)
    .add('🎨 Colors', () => (
        <Fragment>
    
            <div className="global-colors color-background">
                <ColorSwatch color="background" />
                <ColorSwatch color="surface" />
                <ColorSwatch color="primary" />
                <ColorSwatch color="secondary" />
                <ColorSwatch color="error" />
            </div>

            <style>{`
                .global-colors {
                    display: grid;
                    grid-gap: 2rem;
                    padding: 2rem;
                    grid-template: 1fr / auto;
                    grid-template-rows: auto;
                }

                @media (min-width: 768px) {
                    .global-colors {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (min-width: 1224px) {
                    .global-colors {
                        grid-template-columns: repeat(auto-fit, minmax(10rem, 40rem));
                    }
                }
            `}</style>
        </Fragment>
    ))

