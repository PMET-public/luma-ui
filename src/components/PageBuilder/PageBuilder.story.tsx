/**
 * ☢️ Experimental
 */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageBuilder } from './'
import { files, text, number } from '@storybook/addon-knobs'

const backgroundImageAttr = (group: string, showDefault = false) =>
    `{\\&quot;desktop_image\\&quot;:\\&quot;${files(
        `${group} - Background Image`,
        'jpeg, jpg',
        [showDefault ? require('../../../public/images/banner-2.jpg') : ''],
        'PageBuilder'
    )}\\&quot;,\\&quot;mobile_image\\&quot;:\\&quot;${files(
        `${group} - Background Image (Mobile)`,
        'jpeg, jpg',
        [showDefault ? require('../../../public/images/banner-2--mobile.jpg') : ''],
        'PageBuilder'
    )}\\&quot;}`

/**
 * Row Contained
 */
export const PageBuilderRowContainedMock = (children = '') =>
    `<div data-content-type=\"row\" data-appearance=\"contained\" data-element=\"main\"><div data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"${backgroundImageAttr(
        'Row'
    )}\"  data-element=\"inner\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: center; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 0px; padding: 0px; min-height: ${number(
        'Row - Minimum Height',
        0,
        undefined,
        'PageBuilder'
    )}px;">${children}</div></div>`

storiesOf('📦 Components/PageBuilder/Row', module).add('Contained', () => {
    return <PageBuilder html={PageBuilderRowContainedMock()} />
})

/**
 * Row Full Width
 */

export const PageBuilderRowFullWidthMock = (children = '') =>
    `<div data-content-type=\"row\" data-appearance=\"full-width\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"${backgroundImageAttr(
        'Row'
    )}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: center; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 0px; padding: 0px; min-height: ${number(
        'Row - Minimum Height',
        0,
        undefined,
        'PageBuilder'
    )}px;"><div class=\"row-full-width-inner\" data-element=\"inner\">${children}</div></div>`

storiesOf('📦 Components/PageBuilder/Row', module).add('Full Width', () => {
    return <PageBuilder html={PageBuilderRowFullWidthMock()} />
})

/**
 * Row Full Bleed
 */

export const PageBuilderRowFullBleedMock = (children = '') =>
    `<div data-content-type=\"row\" data-appearance=\"full-bleed\" data-enable-parallax=\"0\" data-parallax-speed=\"0.5\" data-background-images=\"${backgroundImageAttr(
        'Row - Minimum Height'
    )}\" data-element=\"main\" style=\"justify-content: center; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; margin: 0px 0px 0px; padding: 0px; min-height: ${number(
        'Minimum Height',
        0,
        undefined,
        'PageBuilder'
    )}px;">${children}</div>`

storiesOf('📦 Components/PageBuilder/Row', module).add('Full Bleed', () => {
    return <PageBuilder html={PageBuilderRowFullBleedMock()} />
})

/**
 * Column
 */
export const PageBuilderColumnMock = (children?: string) =>
    `<div class=\"pagebuilder-column-group\" style=\"display: flex;\" data-content-type=\"column-group\" data-grid-size=\"12\" data-element=\"main\"><div class=\"pagebuilder-column\" data-content-type=\"column\" data-appearance=\"full-height\" data-background-images=\"${backgroundImageAttr(
        'Column'
    )}\" data-element=\"main\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-color: rgb(229, 199, 212); background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; min-height: 600px; width: 50%; margin: 0px; padding: 10px; align-self: stretch;\"></div><div class=\"pagebuilder-column\" data-content-type=\"column\" data-appearance=\"full-height\" data-background-images=\"{}\" data-element=\"main\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-color: rgb(208, 200, 227); background-position: right top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; width: 50%; margin: 0px; padding: 10px; align-self: stretch; min-height: 600px;\"></div></div>`

storiesOf('📦 Components/PageBuilder/Column', module).add('Default', () => {
    return <PageBuilder html={PageBuilderRowContainedMock(PageBuilderColumnMock())} />
})

/** Block */
export const PageBuilderBlockMock = () =>
    `<div data-content-type=\"block\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;\"><div class=\"widget block block-static-block\">\n    <div class=\"contact-info cms-content\">\n   <p class=\"cms-content-important\">We love hearing from you, our Luma customers. Please contact us about anything at all. Your latest passion, unique health experience or request for a specific product. We’ll do everything we can to make your Luma experience unforgettable every time. Reach us however you like</p>\n   <div class=\"block block-contact-info\">\n       <div class=\"block-title\">\n           <strong>Contact Us Info</strong>\n       </div>\n       <div class=\"block-content\">\n           <div class=\"box box-phone\">\n               <strong class=\"box-title\">\n                   <span>Phone</span>\n               </strong>\n               <div class=\"box-content\">\n                   <span class=\"contact-info-number\">1-800-403-8838</span>\n                   <p>Call the Luma Helpline for concerns, product questions, or anything else. We’re here for you 24 hours a day - 365 days a year.</p>\n               </div>\n           </div>\n           <div class=\"box box-design-inquiries\">\n               <strong class=\"box-title\">\n                   <span>Apparel Design Inquiries</span>\n               </strong>\n               <div class=\"box-content\">\n                   <p>Are you an independent clothing designer? Feature your products on the Luma website! Please direct all inquiries via email to: <a href=\"mailto:cs@luma.com\">cs@luma.com</a></p>\n               </div>\n           </div>\n           <div class=\"box box-press-inquiries\">\n               <strong class=\"box-title\">\n                   <span>Press Inquiries</span>\n               </strong>\n               <div class=\"box-content\">\n                   <p>Please direct all media inquiries via email to: <a href=\"mailto:pr@luma.com\">pr@luma.com</a></p>\n               </div>\n           </div>\n       </div>\n   </div>\n</div>\n</div>\n</div>`

storiesOf('📦 Components/PageBuilder/Block', module).add('Default', () => (
    <PageBuilder html={PageBuilderRowContainedMock(PageBuilderBlockMock())} />
))

/**
 * Buttons Inline
 */

export const PageBuilderButtonsInlineMock = () =>
    `<div data-content-type=\"buttons\" data-appearance=\"inline\" data-same-width=\"false\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px 10px 0px;\"><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><div class=\"pagebuilder-button-primary\" data-element=\"empty_link\" style=\"text-align: center;\"><span data-element=\"link_text\">Primary Button</span></div></div><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><div class=\"pagebuilder-button-secondary\" data-element=\"empty_link\" style=\"text-align: center;\"><span data-element=\"link_text\">Secondary Button</span></div></div><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><a class=\"pagebuilder-button-link\" href=\"https://magento.com\" target=\"_blank\" data-link-type=\"default\" data-element=\"link\" style=\"text-align: center;\"><span data-element=\"link_text\">Magento.com&nbsp;</span></a></div></div>`

storiesOf('📦 Components/PageBuilder/Buttons', module).add('Inline', () => (
    <PageBuilder html={PageBuilderRowContainedMock(PageBuilderButtonsInlineMock())} />
))

/**
 * Buttons Stacked
 */

export const PageBuilderButtonsStackedMock = () =>
    `<div data-content-type=\"buttons\" data-appearance=\"stacked\" data-same-width=\"true\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; display: flex; margin: 0px; padding: 10px 10px 0px; flex-direction: column;\"><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><div class=\"pagebuilder-button-primary\" data-element=\"empty_link\" style=\"text-align: center;\"><span data-element=\"link_text\">Primary Button</span></div></div><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><div class=\"pagebuilder-button-secondary\" data-element=\"empty_link\" style=\"text-align: center;\"><span data-element=\"link_text\">Secondary Button</span></div></div><div data-content-type=\"button-item\" data-appearance=\"default\" data-element=\"main\" style=\"display: inline-block;\"><a class=\"pagebuilder-button-link\" href=\"https://magento.com\" target=\"_blank\" data-link-type=\"default\" data-element=\"link\" style=\"text-align: center;\"><span data-element=\"link_text\">Magento.com&nbsp;</span></a></div></div>`

storiesOf('📦 Components/PageBuilder/Buttons', module).add('Stacked', () => (
    <PageBuilder html={PageBuilderRowContainedMock(PageBuilderButtonsStackedMock())} />
))

/**
 * Divider
 */

export const PageBuilderDividerMock = () =>
    `<div data-content-type=\"divider\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-color: transparent; border-width: 1px; margin: 0px; padding: 10px;\"><hr data-element=\"line\" style=\"width: 100%; border-width: 1px; border-color: rgba(0, 0, 0, 0.25); display: inline-block;\"></div>`

storiesOf('📦 Components/PageBuilder/Divider', module).add('Default', () => (
    <PageBuilder html={PageBuilderRowContainedMock(PageBuilderDividerMock())} />
))

/**
 * Heading
 */
export const PageBuilderHeadingMock = () =>
    `<h1 data-content-type=\"heading\" data-appearance=\"default\" data-element=\"main\" style=\"text-align: center; border-style: none; border-width: 1px; border-radius: 0px;\">${text(
        'Heading - Text',
        'Heading goes here',
        'PageBuilder'
    )}</h1>`

storiesOf('📦 Components/PageBuilder/Heading', module).add('Default', () => (
    <PageBuilder html={PageBuilderRowContainedMock(PageBuilderHeadingMock())} />
))

/**
 * Html
 */

export const PageBuilderHtmlMock = () =>
    `<div data-content-type=\"html\" data-appearance=\"default\" data-element=\"main\" style=\"text-align: left; border-style: none; border-color: rgb(135, 135, 135); border-width: 1px; margin: 0px; padding: 0px;\">&lt;pre&gt;\r\n&lt;code&gt;\r\nimport React from 'react'\r\nimport { Component } from '../../../../lib'\r\nimport { Root } from './Html.styled'\r\n\r\nimport HtmlComponent, { HtmlProps as HtmlComponentProps } from '../../../Html'\r\n\r\nexport type HtmlProps = HtmlComponentProps\r\n\r\nexport export const PageBuilderHtmlMock: Component&lt;HtmlProps&gt; = ({ children, ...props }) =&gt; {\r\n    return &lt;Root as={HtmlComponent} {...props} /&gt;\r\n}\r\n&lt;/code&gt;\r\n&lt;/pre&gt;</div>`

storiesOf('📦 Components/PageBuilder/Html', module).add('Default', () => (
    <PageBuilder html={PageBuilderRowContainedMock(PageBuilderHtmlMock())} />
))

/**
 * Image
 */

export const PageBuilderImageMock = () =>
    `<figure data-content-type=\"image\" data-appearance=\"full-width\" data-element=\"main\" style=\"margin: 0px; padding: 0px; border-style: none;\"><a href=\"https://magento.com\" target=\"_blank\" data-link-type=\"default\" title=\"Test Title\" data-element=\"link\"><img class=\"pagebuilder-mobile-hidden\" src=\"${text(
        'Image',
        require('../../../public/images/banner-1.jpg'),
        'PageBuilder'
    )}\" alt=\"Test Alt\" title=\"Test Title\" data-element=\"desktop_image\" style=\"border-style: none; border-width: 1px; border-radius: 10px; max-width: 100%; height: auto;\"><img class=\"pagebuilder-mobile-only\" src=\"${text(
        'Image (Mobile)',
        require('../../../public/images/banner-1--mobile.jpg'),
        'PageBuilder'
    )}\" alt=\"Test Alt\" title=\"Test Title\" data-element=\"mobile_image\" style=\"border-style: none; border-width: 1px; border-radius: 10px; max-width: 100%; height: auto;\"></a><figcaption data-element=\"caption\">${text(
        'Image - Caption',
        '',
        'PageBuilder'
    )}</figcaption></figure>`

storiesOf('📦 Components/PageBuilder/Image', module).add('Default', () => (
    <PageBuilder html={PageBuilderRowContainedMock(PageBuilderImageMock())} />
))

/**
 * Tabs
 */

export const PageBuilderTabsMock = (children = '') => {
    const count = number('Tabs - # of items', 3, undefined, 'PageBuilder')

    const items = new Array(count)
        .fill(null)
        .map((_, index) => {
            const name = `Tab ${index + 1}`
            return `<div data-content-type=\"tab-item\" data-appearance=\"default\" data-tab-name=\"${name}\" data-background-images=\"{}\" data-element=\"main\" id=\"${index}\" style=\"justify-content: flex-start; display: flex; flex-direction: column; background-position: left top; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-width: 1px; border-radius: 0px; margin: 0px; padding: 10px;\">${children}</div>`
        })
        .join('')

    return `<div class=\"tab-align-left\" data-content-type=\"tabs\" data-appearance=\"default\" data-active-tab=\"0\" data-element=\"main\" style=\"margin: 0px; padding: 0px;\"><div class=\"tabs-content\" data-element=\"content\" style=\"border-width: 1px; border-radius: 0px;\">${items}</div>`
}

storiesOf('📦 Components/PageBuilder/Tabs', module).add('Default', () => (
    <PageBuilder html={PageBuilderRowContainedMock(PageBuilderTabsMock())} />
))

/**
 * Text
 */
export const PageBuilderTextMock = (children = '') =>
    `<div data-content-type=\"text\" data-appearance=\"default\" data-element=\"main\" style=\"border-style: none; border-width: 1px; border-radius: 0px; margin: 0px; padding: 0px;\">${children}</div>`

storiesOf('📦 Components/PageBuilder/Text', module).add('Default', () => (
    <PageBuilder
        html={PageBuilderRowContainedMock(
            PageBuilderTextMock(
                '<h1 style="text-align: center;">Hola!</h1>\r\n<p id="output" class="page-generator__lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>'
            )
        )}
    />
))

/**
 * Video
 */

export const PageBuilderVideoMock = () =>
    `<div data-content-type=\"video\" data-appearance=\"default\" data-element=\"main\" style=\"margin: 0px;\"><div class=\"pagebuilder-video-inner\" data-element=\"inner\"><div class=\"pagebuilder-video-wrapper\" data-element=\"wrapper\" style=\"border-style: none; border-width: 1px; border-radius: 0px; padding: 0px;\"><div class=\"pagebuilder-video-container\"><iframe frameborder=\"0\" allowfullscreen=\"\" src=\"https://player.vimeo.com/video/1084537?title=0&amp;byline=0&amp;portrait=0\" data-element=\"video\"></iframe></div></div></div></div>`

storiesOf('📦 Components/PageBuilder/Video', module).add('Default', () => (
    <PageBuilder html={PageBuilderRowContainedMock(PageBuilderVideoMock())} />
))

/**
 * Banner
 */

export const PageBuilderBannerMock = () =>
    `<div data-content-type=\"banner\" data-appearance=\"collage-right\" data-show-button=\"always\" data-show-overlay=\"never\" data-element=\"main\" style=\"margin: 0px;\"><a href=\"https://magento.com\" target=\"_blank\" data-link-type=\"default\" data-element=\"link\"><div class=\"pagebuilder-banner-wrapper\" data-background-images=\"${backgroundImageAttr(
        'Banner',
        true
    )}\" data-element=\"wrapper\" style=\"color: white; display: flex; align-items: flex-end; background-position: center; background-size: cover; background-repeat: no-repeat; background-attachment: scroll; border-style: none; border-width: 1px; border-radius: 0px; padding: 0px; min-height: 400px; text-align: left; max-height: 400px;\"><div class=\"pagebuilder-overlay\" data-overlay-color=\"\" data-element=\"overlay\" style=\"background-color: transparent;\"><div class=\"pagebuilder-collage-content\"><div data-element=\"content\"><div><p>Find conscientious, comfy clothing in our eco-friendly collection</p><h2>TWICE AROUND, TWICE AS NICE</h2></div></div><button type=\"button\" class=\"pagebuilder-banner-button pagebuilder-button-primary\" data-element=\"button\" style=\"opacity: 1; visibility: visible;\">Magento.com</button></div></div></div></a></div>`

storiesOf('📦 Components/PageBuilder/Banner', module).add('Default', () => (
    <PageBuilder html={PageBuilderRowFullBleedMock(PageBuilderBannerMock())} />
))
