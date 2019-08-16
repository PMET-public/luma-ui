import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { withTheme } from './decorators/withTheme'

import Logo from './static/logo.png'

addDecorator(withTheme)
addDecorator(withKnobs)
addDecorator(withA11y)

addParameters({
    options: {
        panelPosition: 'bottom',
        sortStoriesByKind: true,
        theme: create({
            base: 'dark',
            brandTitle: 'Luma Storybook',
            brandUrl: 'https://pmet-public.github.io/luma-storybook',
            brandImage: Logo,
            barBg: 'rgba(0, 0, 0, 0.3)',
            colorSecondary: 'rgba(255, 255, 225, 0.2)',
            inputBg: 'rgba(0, 0, 0, 0.15)',
            inputBorder: 'none',
            inputBorderRadius: 20,
        }),
    },
    knobs: {
        escapeHTML: false
    }
})

const req = require.context('../src', true, /\.(story|stories)\.tsx$/)

function loadStories() {
    require('./welcome.tsx')
    req.keys().forEach(req)
}

configure(loadStories, module)

