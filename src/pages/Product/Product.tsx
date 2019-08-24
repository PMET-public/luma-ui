import React, { FunctionComponent, Suspense } from 'react'
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
import Assembler, { AssemblerProps } from '../../components/Assembler'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'

const TextSwatches = React.lazy(() => import('../../components/TextSwatches'))
const ThumbSwatches = React.lazy(() => import('../../components/ThumbSwatches'))

export type ProductProps = {
    assembler?: AssemblerProps
    breadcrumbs?: BreadcrumbsProps
    buttons: ButtonProps[]
    description?: AssemblerProps
    images: ImageProps[]
    swatches?: Array<{
        title?: {
            text: string
        }
        type: 'text' | 'thumb'
        props: any
    }>
    price: PriceProps
    sku?: {
        text: string
    }
    title: {
        text: string
    }
}

export const Product: FunctionComponent<ProductProps> = ({
    assembler,
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

                        {description && <Assembler {...description} />}
                    </Info>
                </InfoWrapper>
            </Wrapper>

            {assembler && <Assembler {...assembler} />}
        </Root>
    )
}
