import React from 'react'
import Breadcrumbs from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Breadcrumbs', module)
    .add('Default', () => (
        <div className="story">
            <Breadcrumbs
                dividor={text('dividor', '')}
                prefix={text('prefix', '')}
                items={[
                    { as: 'a', href: '#', text: 'One' },
                    { as: 'a', href: '#', text: 'Two' },
                    { as: 'a', href: '#', text: 'Three' },
                ]}
            />

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    height: 100vh;
                    justify-content: center;
                    width: 100%;
                }
            `}</style>
        </div>
    ))
