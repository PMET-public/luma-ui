import React, { FunctionComponent } from 'react'
import { Root, ImageWrapper, Content, Titles, Title, Buttons } from './Banner.styled'

import Image, { ImageProps } from '../Image'
import Button, { ButtonProps } from '../Button'

export type BannerProps = {
    image: ImageProps
    titles?: Array<{
        text: string
        large?: boolean
    }>
    position?: 'top' | 'bottom'
    buttons?: ButtonProps[]
}

export const Banner: FunctionComponent<BannerProps> = ({ buttons, image, position = 'top', titles, ...props }) => {
    return (
        <Root {...props}>
            <ImageWrapper>
                <Image transition {...image} />
            </ImageWrapper>

            <Content $position={position}>
                {titles && (
                    <Titles>
                        {titles.map(({ large = false, text, ...title }, index) => (
                            <Title $large={large} key={index} {...title}>
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
