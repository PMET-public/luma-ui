import React from 'react'
import Map from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Map', module).add('Default', () => (
    <Map
        apiKey="AIzaSyA3xyZiU5WL0LHvTOA4ZyfOmTZQ4UycYcw"
        locations={[
            {
                _id: 0,
                name: 'Adobe',
                country: 'United States',
                lat: 30.40134,
                lng: -97.72415,
                comment: '',
                phone: '1800-888-8888',
                address: '11501 Domain Dr #110',
                city: 'Austin',
                state: 'TX',
                zipCode: '78758',
            },
            {
                _id: 2,
                name: 'South Congress',
                country: 'United States',
                lat: 30.214261,
                lng: -97.7715978,
                comment: '',
                phone: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
            },
        ]}
        style={{
            width: '100vw',
            height: '100vh',
        }}
    />
))
