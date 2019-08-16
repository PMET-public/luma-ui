import React from 'react'
import SearchBar from './'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text, number, boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/SearchBar', module)
    .add('Default', () => {
        const value = text('value', 'Shoes')
        const count = value.length > 0 ? number('count', 10) : undefined

        return (
            <div className="story">
                <div>
                    <SearchBar 
                        onUpdate={(query: string) => action(`onUpdate(${query})`)()}
                        onSearch={(query: string) => action(`onSubmit(${query})`)()}
                        count={count}
                        value={value}
                        clearButton={boolean('clearButton', true)}
                        
                    />

                    <style>{`
                        .story {
                            align-items: center;
                            display: flex;
                            height: 100vh;
                            justify-content: center;
                            width: 100%;
                        }
                    `}</style>
                </div>
            </div>
        )
    })
