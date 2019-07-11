import React from 'react'
import Banner from './'
import { storiesOf } from '@storybook/react'
import { object, select } from '@storybook/addon-knobs'

storiesOf('📦 Components/Banner', module)
    .add('Default', () => (
        <div className="story">
            <Banner 
                image={object('image', {
                    alt: '',                    src: require('../../../public/images/banner-1.jpg'),
                    width: '100%',
                    height: 700,
                })}
                position={select('position', { top: 'top', bottom: 'bottom' }, 'top')}
                titles={object('titles', [
                    { title: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                    { title: 'Twice around, twice as nice', large: true },
                ])}
                buttons={object('buttons', [
                    { label: 'Button 1', fill: true, link: { href: '#button1' } },
                    { label: 'Button 2', link: { href: '#button2' } },
                    { label: 'Button 3', link: { href: '#button3' } },
                ])}
            />

            <style jsx global>{`
                .story {
                    align-items: center;
                    display: flex;
                    justify-content: center;
                    width: 100%;
                }
            `}</style>
        </div>
    ))
