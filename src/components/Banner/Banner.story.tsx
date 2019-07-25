import React from 'react'
import Banner from './'
import { storiesOf } from '@storybook/react'
import { object, select } from '@storybook/addon-knobs'

storiesOf('📦 Components/Banner', module)
    .add('Default', () => (
        <div className="story">
            <Banner 
                image={object('image', {
                    alt: '',                    
                    src: require('../../../public/images/banner-1.jpg'),
                    width: 1920,
                    height: 1320,
                })}
                position={select('position', { top: 'top', bottom: 'bottom' }, 'top')}
                titles={object('titles', [
                    { label: 'Find conscientious, comfy clothing in our eco-friendly collection' },
                    { label: 'Twice around, twice as nice', large: true },
                ])}
                buttons={object('buttons', [
                    { label: 'Button 1', fill: true, as: 'a', href: '#' },
                    { label: 'Button 2', as: 'a', href: '#' },
                    { label: 'Button 3', as: 'a', href: '#' },
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
