import React from 'react'
import Page from '../Page'
import { storiesOf } from '@storybook/react'
import App from '../../components/App'
import { AppMockData } from '../../components/App/App.story'
import { text } from '@storybook/addon-knobs'

storiesOf('📑 Templates/Page', module).add(
    'Default',
    () => (
        <App {...AppMockData}>
            <Page
                pageBuilder={{
                    html: text(
                        'PageBuilder HTML',
                        `<div data-content-type=\"row\" data-appearance=\"full-bleed\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"{\\&quot;desktop_image\\&quot;:\\&quot;${require('../../../public/images/banner-2.1.jpg')}\\&quot;}\" data-element=\"main\" style=\"justify-content: flex-end; display: flex; flex-direction: column; background-position: center; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; text-align: left; border-style: none; border-width: 1px; border-radius: 0px; min-height: 600px; margin: 0px 0px 10px; padding: 20px; color: white;\"><h2 data-content-type=\"heading\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px;\">TWICE AROUND. TWICE AS NICE.</h2><div data-content-type=\"text\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 10px 0px; padding: 0px;\"><p>Find conscientious, comfy clothing in our eco-friendly collection</p></div><div data-content-type=\"buttons\" data-appearance=\"inline\" data-same-width=\"false\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;\"><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><div class=\"pagebuilder-button-primary\" data-element=\"empty_link\"><span data-element=\"link_text\">Shop Performance</span></div></div></div></div>`
                    ),
                }}
            />
        </App>
    ),
    {
        theme: {
            layout: 'fullPage',
        },
    }
)
