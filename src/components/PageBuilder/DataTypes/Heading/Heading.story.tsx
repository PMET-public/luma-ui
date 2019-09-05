import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageBuilder } from '../../PageBuilder'

const html = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 200px; margin: 0px; padding: 10px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><h1 data-content-type=\"heading\" data-appearance=\"default\" data-element=\"main\" style=\"text-align: center; border-style: none; border-width: 1px; border-radius: 0px;\">Tsamina mina zangalewa</h1></div></div>`
storiesOf('📦 Components/PageBuilder/Heading', module).add('Default', () => <PageBuilder html={html} />)
