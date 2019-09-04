import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { PageBuilder } from '../../PageBuilder'

const html = `<div data-content-type=\"row\" data-appearance=\"contained\" data-element=\"main\"><div data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"inner\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 10px; padding: 10px;\"><h2 data-content-type=\"heading\" data-appearance=\"default\" data-element=\"main\" style=\"text-align: center; border-style: none; border-width: 1px; border-radius: 0px;\">Hello, title</h2></div></div>`
storiesOf('📦 Components/PageBuilder/Heading', module).add('Default', () => <PageBuilder html={text('html', html)} />)
