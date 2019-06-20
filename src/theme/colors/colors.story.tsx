import React, { useContext, useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import ColorSwatch from '../../../.storybook/components/ColorSwatch'
import './colors.story.less'
import { color } from '@storybook/addon-knobs'
import { ThemeContext } from '../'

const ThemeUpdate = ({ theme }: any) => {
    const { set } = useContext(ThemeContext)
    useEffect(() => {
        set(theme)
    }, [theme])
    return null
}

storiesOf('🖼 Theme', module)
    .add('🎨 Colors', () => (
        <div className="story--padded">
            <ThemeUpdate theme={{
                colors: {
                    link: color('link', '#263238'),
                    linkHover: color('linkHover', '#37474F'),
            
                    background: color('background', '#fff'),
                    onBackground: color('onBackground', '#222'),
            
                    surface: color('surface', '#fff'),
                    onSurface: color('onSurface', '#222'),
            
                    primary: color('primary', '#111'),
                    onPrimary: color('onPrimary', '#fff'),
            
                    secondary: color('secondary', '#212121'),
                    onSecondary: color('onSecondary', '#fafafa'),
            
                    accent: color('accent', '#a14a24'),
                    onAccent: color('onAccent', '#fafafa'),
            
                    error: color('error', 'transparent'),
                    onError: color('onError', '#ef5350'),
            
                    warning: color('warning', 'transparent'),
                    onWarning: color('onWarning', '#f57c00'),
            
                    notice: color('notice', 'transparent'),
                    onNotice: color('onNotice', '#039be5'),
                },
            }} />
            <h1>🎨 Colors</h1>

            <hr />

            <div className="global-colors color-background grid">
                <ColorSwatch color="background" />
                <ColorSwatch color="surface" />
                <ColorSwatch color="primary" />
                <ColorSwatch color="secondary" />
                <ColorSwatch color="accent" />
                <ColorSwatch color="error" />
                <ColorSwatch color="warning" />
                <ColorSwatch color="notice" />
            </div>
        </div>
    ))
