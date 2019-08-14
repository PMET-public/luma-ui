import React from 'react'
import Skeleton from './'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import Html from '../Html'

storiesOf('📦 Components/Skeleton', module)
    .add('Default', () => {
        const loading = boolean('loading', true)
        const title = loading ? undefined : '👋 Hi, I\'m Skeleton'
        const body = loading ? undefined : `
            Dayman (a-a-ah...)<br />
            Fighter of the Nightman (a-a-ah...)<br />
            Champion of the sun (a-a-ah...)<br />
            You're a master of karate and friendship<br />
            For everyone
        `
        
        return (
            <div className="story">
                <h1 className="story__title">
                    {title || <Skeleton width="30rem" />}
                </h1>

                {body ? <Html source={body} /> : <Skeleton lines={4} />}
      
                <style jsx global>{`

                body {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                }
                
                .story {
                    margin: auto;
                    width: 40rem;
                    display: grid;
                    grid-gap: 1rem;
                }

            `}</style>
            </div>
        )
    })
