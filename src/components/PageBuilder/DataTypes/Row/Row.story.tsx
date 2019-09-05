import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageBuilder } from '../../PageBuilder'

const html = `<div data-content-type=\"row\" data-appearance=\"contained\" data-element=\"main\"><div data-enable-parallax=\"1\" data-parallax-speed=\"0.5\" data-background-images=\"{\\&quot;desktop_image\\&quot;:\\&quot;${require('../../../../../public/images/banner-1.jpg')}\\&quot;,\\&quot;mobile_image\\&quot;:\\&quot;${require('../../../../../public/images/banner-1--mobile.jpg')}\\&quot;}\" data-element=\"inner\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-color: rgb(251, 223, 194); background-position: left top; background-size: cover; background-repeat: repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 10px; padding: 0px; min-height: 600px;\"></div></div>`
storiesOf('📦 Components/PageBuilder/Row', module).add('Default', () => <PageBuilder html={html} />)
