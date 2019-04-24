import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

import Logo from './static/logo.png'

addDecorator(withKnobs)
addDecorator(withA11y)

addParameters({
    backgrounds: [
        { name: 'Dark', value: '#333', default: true },
        { name: 'Light', value: '#f9f9f9', default: false },
    ],
    options: {
        theme: create({
            base: 'dark',
            brandTitle: 'Luma Storybook',
            // brandUrl: 'https://example.com',
            brandImage: Logo,
            appBorderRadius: 20
        }),
    },
})

const req = require.context('../src', true, /\.(story|stories)\.tsx$/)

function loadStories() {
    req.keys().forEach(req)
}

configure(loadStories, module)

