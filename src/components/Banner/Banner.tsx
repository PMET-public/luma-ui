import React from 'react'
import { Component } from '../../lib'
import { Root, Image, Content, Titles, Title, Buttons, Button } from './Banner.styled'

import { ImageProps } from '../Image'
import { ButtonProps } from '../Button'

export type BannerProps = {
    image: ImageProps
    titles?: Array<{
        text: string
        large?: boolean
    }>
    position?: 'top' | 'bottom'
    buttons?: ButtonProps[]
}

export const Banner: Component<BannerProps> = ({ buttons, image, position = 'top', titles, ...props }) => {
    return (
        <Root {...props}>
            <Image transition {...image} />

            <Content position={position}>
                {titles && (
                    <Titles>
                        {titles.map(({ large = false, text, ...title }, index) => (
                            <Title large={large} key={index} {...title}>
                                {text}
                            </Title>
                        ))}
                    </Titles>
                )}

                {buttons && (
                    <Buttons>
                        {buttons.map((button, index) => (
                            <Button key={index} {...button} />
                        ))}
                    </Buttons>
                )}
            </Content>
        </Root>
    )
}
