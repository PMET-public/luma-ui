import React, { Suspense } from 'react'
import { Component, Props } from '../../lib'
import {
    Root,
    Wrapper,
    Images,
    InfoWrapper,
    Info,
    Header,
    Title,
    Sku,
    Swatches,
    SwatchesTitle,
    Buttons,
} from './Product.styled'

import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Button, { ButtonProps } from '../../components/Button'
import PageBuilder, { PageBuilderProps } from '../../components/PageBuilder'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'

const TextSwatches = React.lazy(() => import('../../components/TextSwatches'))
const ThumbSwatches = React.lazy(() => import('../../components/ThumbSwatches'))

export type ProductProps = {
    pageBuilder?: PageBuilderProps
    breadcrumbs?: BreadcrumbsProps
    buttons: ButtonProps[]
    description?: PageBuilderProps
    images: ImageProps[]
    swatches?: Array<{
        title?: Props<{
            text: string
        }>
        type: 'text' | 'thumb'
        props: any
    }>
    price: PriceProps
    sku?: Props<{
        text: string
    }>
    title: Props<{
        text: string
    }>
}

export const Product: Component<ProductProps> = ({
    pageBuilder,
    breadcrumbs,
    buttons,
    description,
    images,
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
                        {images.map((image, index) => (
                            <Carousel.Item key={index}>
                                <Image transition vignette={1} {...image} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Images>

                <InfoWrapper>
                    <Info>
                        <Header>
                            {breadcrumbs && <Breadcrumbs prefix="#" {...breadcrumbs} />}

                            <Title {...title}>{title.text}</Title>

                            <Price {...price} />

                            {sku && <Sku {...sku}>{sku.text}</Sku>}
                        </Header>

                        {swatches &&
                            swatches.map(({ type, title, props }, index) => (
                                <Suspense fallback="Loading...." key={index}>
                                    <Swatches>
                                        {title && <SwatchesTitle {...title}>{title.text}</SwatchesTitle>}
                                        {type === 'text' && <TextSwatches {...props} />}
                                        {type === 'thumb' && <ThumbSwatches {...props} />}
                                    </Swatches>
                                </Suspense>
                            ))}

                        <Buttons>
                            {buttons.map((button, index) => (
                                <Button key={index} {...button} />
                            ))}
                        </Buttons>

                        {description && <PageBuilder {...description} />}
                    </Info>
                </InfoWrapper>
            </Wrapper>

            {pageBuilder && <PageBuilder {...pageBuilder} />}
        </Root>
    )
}
