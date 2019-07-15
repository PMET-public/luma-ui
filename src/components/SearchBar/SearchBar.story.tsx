import React from 'react'
import SearchBar from './'
import { storiesOf } from '@storybook/react'
import Container from '../Container'
import { action } from '@storybook/addon-actions'
import { text, number } from '@storybook/addon-knobs'

storiesOf('📦 Components/SearchBar', module)
    .add('Default', () => (
        <div className="story">
            <Container>
                <SearchBar 
                    onUpdate={(query: string) => action(`onUpdate(${query})`)()}
                    onSearch={(query: string) => action(`onSubmit(${query})`)()}
                    count={number('count', 0)}
                    value={text('value', 'Shoes')}
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
            </Container>
        </div>
    ))
