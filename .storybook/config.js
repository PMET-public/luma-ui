import './storybook.css'
import '../src/styles/index.less' // global styles
import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

import Logo from './static/logo.png'

addDecorator(withKnobs)
addDecorator(withA11y)

addParameters({
    options: {
        panelPosition: 'bottom',
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
})

const req = require.context('../src', true, /\.(story|stories)\.tsx$/)

function loadStories() {
    req.keys().forEach(req)
}

configure(loadStories, module)

