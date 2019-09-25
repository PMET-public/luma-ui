import React from 'react'
import { Component, Props } from '../../lib'
import {
    Root,
    Wrapper,
    Images,
    InfoWrapper,
    InfoOptions,
    Info,
    Header,
    Title,
    Sku,
    Swatches,
    SwatchesTitle,
    Buttons,
    ShortDescription,
    Description,
} from './Product.styled'

import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Button, { ButtonProps } from '../../components/Button'
import PageBuilder, { PageBuilderProps } from '../../components/PageBuilder'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'
import TextSwatches, { TextSwatchesProps } from '../../components/TextSwatches'
import ThumbSwatches, { ThumbSwatchesProps } from '../../components/ThumbSwatches'

// const TextSwatches = React.lazy(() => import('../../components/TextSwatches'))
// const ThumbSwatches = React.lazy(() => import('../../components/ThumbSwatches'))

export type ProductProps = {
    categories?: BreadcrumbsProps
    buttons: ButtonProps[]
    shortDescription?: string
    description?: PageBuilderProps
    gallery: ImageProps[]
    swatches?: Array<
        {
            _id?: string | number
            title?: Props<{
                text: string
            }>
        } & ({ type: 'text'; props: TextSwatchesProps } | { type: 'thumb'; props: ThumbSwatchesProps })
    >
    price: PriceProps
    sku?: Props<{
        text: string
    }>
    title: Props<{
        text: string
    }>
}

export const Product: Component<ProductProps> = ({
    description,
    shortDescription,
    categories,
    buttons,
    gallery,
    price,
    sku,
    swatches,
    title,
    ...props
}) => {
    return (
        <Root {...props}>
            <Wrapper>
                <Images>
                    <Carousel gap={1} padding={3}>
                        {gallery.map((image, index) => (
                            <Carousel.Item key={index}>
                                <Image transition vignette={1} {...image} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Images>

                <InfoWrapper>
                    <Info>
                        <Header>
                            {categories && <Breadcrumbs prefix="#" {...categories} />}

                            <Title {...title}>{title.text}</Title>

                            <Price {...price} />

                            {sku && <Sku {...sku}>{sku.text}</Sku>}
                        </Header>

                        {shortDescription && (
                            <ShortDescription dangerouslySetInnerHTML={{ __html: shortDescription }} />
                        )}
                        <InfoOptions>
                            {swatches &&
                                swatches.map(({ _id, type, title, props }, index) => (
                                    <Swatches key={_id || index}>
                                        {title && <SwatchesTitle {...title}>{title.text}</SwatchesTitle>}
                                        {type === 'text' && <TextSwatches {...(props as TextSwatchesProps)} />}
                                        {type === 'thumb' && <ThumbSwatches {...(props as ThumbSwatchesProps)} />}
                                    </Swatches>
                                ))}

                            <Buttons>
                                {buttons.map((button, index) => (
                                    <Button key={index} {...button} />
                                ))}
                            </Buttons>
                        </InfoOptions>

                        {description && (
                            <Description>
                                <PageBuilder {...description} />
                            </Description>
                        )}
                    </Info>
                </InfoWrapper>
            </Wrapper>
        </Root>
    )
}
