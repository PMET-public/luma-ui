import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageBuilder } from '../../PageBuilder'

const html = `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px;\"><div class=\"row-full-width-inner\" data-element=\"inner\"><div class=\"pagebuilder-column-group\" style=\"display: flex;\" data-content-type=\"column-group\" data-grid-size=\"12\" data-element=\"main\"><div class=\"pagebuilder-column\" data-content-type=\"column\" data-appearance=\"full-height\" data-background-images=\"{\\&quot;desktop_image\\&quot;:\\&quot;${require('../../../../../public/images/banner-1.jpg')}\\&quot;}\" data-element=\"main\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch; min-height: 600px;\"></div><div class=\"pagebuilder-column\" data-content-type=\"column\" data-appearance=\"full-height\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-color: rgb(252, 0, 9); background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;\"></div></div></div></div>`
storiesOf('📦 Components/PageBuilder/Column', module).add('Default', () => <PageBuilder html={html} />)
