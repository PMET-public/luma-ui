import { addDecorator, addParameters, configure } from '@storybook/react'
import { themes } from '@storybook/theming'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'

addDecorator(withInfo)
addDecorator(withKnobs)
addDecorator(withA11y)

addParameters({
    backgrounds: [
        { name: 'Dark', value: '#333', default: true },
        { name: 'Light', value: '#f9f9f9', default: false },
    ],
    options: {
        brand: 'Luma',
        theme: themes.dark,
    },
})

const req = require.context('../src', true, /\.(story|stories)\.tsx$/)

function loadStories() {
    req.keys().forEach(req)
}

configure(loadStories, module)

