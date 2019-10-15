import React, { useMemo } from 'react'
import { Component, Props } from '../../lib'
import {
    Root,
    Wrapper,
    Images,
    InfoWrapper,
    InfoInnerWrapper,
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
import useForm from 'react-hook-form'

import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Button, { ButtonProps } from '../../components/Button'
import PageBuilder, { PageBuilderProps } from '../../components/PageBuilder'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'
import TextSwatches, { TextSwatchesProps } from '../../components/TextSwatches'
import ThumbSwatches, { ThumbSwatchesProps } from '../../components/ThumbSwatches'
import { isPageBuilderHtml } from '../../components/PageBuilder/lib/utils'

// const TextSwatches = React.lazy(() => import('../../components/TextSwatches'))
// const ThumbSwatches = React.lazy(() => import('../../components/ThumbSwatches'))

export type ProductProps = {
    categories?: BreadcrumbsProps
    buttons: ButtonProps[]
    shortDescription?: string
    description?: PageBuilderProps
    gallery: ImageProps[]
    options?: Array<
        {
            _id?: string | number
            title?: Props<{
                text: string
            }>
            required?: boolean
        } & ({ type: 'text'; swatches: TextSwatchesProps } | { type: 'thumb'; swatches: ThumbSwatchesProps })
    >

    price: PriceProps
    sku?: Props<{
        text: string
    }>
    title: Props<{
        text: string
    }>
    onSubmit?: (...args: any) => any
}

export const Product: Component<ProductProps> = ({
    description,
    shortDescription,
    categories,
    buttons,
    gallery,
    price,
    sku,
    options,
    title,
    onSubmit = () => {},
    ...props
}) => {
    const { register, handleSubmit } = useForm()

    const descriptionAsPageBuilderContent = useMemo(() => {
        return !!description && isPageBuilderHtml(description.html)
    }, [description && description.html])

    return (
        <Root as="form" {...props} onSubmit={handleSubmit(onSubmit)}>
            <Wrapper>
                <Images>
                    <Carousel gap={1} padding={3}>
                        {gallery.map((image, index) => (
                            <Carousel.Item key={index}>
                                <Image transition vignette={10} {...image} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Images>

                <InfoWrapper>
                    <InfoInnerWrapper>
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

                            {options && (
                                <InfoOptions>
                                    {options.map(({ _id, type, title, required, swatches }, index) => (
                                        <fieldset key={_id || index}>
                                            <Swatches>
                                                {title && (
                                                    <SwatchesTitle as="legend" {...title}>
                                                        {title.text}
                                                    </SwatchesTitle>
                                                )}
                                                {type === 'text' && (
                                                    <TextSwatches
                                                        ref={register({ required })}
                                                        {...(swatches as TextSwatchesProps)}
                                                    />
                                                )}
                                                {type === 'thumb' && (
                                                    <ThumbSwatches
                                                        ref={register({ required })}
                                                        {...(swatches as ThumbSwatchesProps)}
                                                    />
                                                )}
                                            </Swatches>
                                        </fieldset>
                                    ))}

                                    <Buttons>
                                        {buttons.map((button, index) => (
                                            // disabled if invalid
                                            <Button key={index} {...button} />
                                        ))}
                                    </Buttons>
                                </InfoOptions>
                            )}

                            {description && !descriptionAsPageBuilderContent && (
                                <Description>
                                    <PageBuilder {...description} />
                                </Description>
                            )}
                        </Info>
                    </InfoInnerWrapper>
                </InfoWrapper>
            </Wrapper>
            {description && descriptionAsPageBuilderContent && <PageBuilder {...description} />}
        </Root>
    )
}
