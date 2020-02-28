import React, { useState, useRef, useCallback, MutableRefObject } from 'react'
import { Component, Props } from '../../lib'
import {
    Root,
    Wrapper,
    Images,
    CarouselWrapper,
    CarouselItem,
    GalleryGrid,
    InfoWrapper,
    InfoInnerWrapper,
    InfoOptions,
    Field,
    Info,
    Header,
    Title,
    Sku,
    Buttons,
    ShortDescription,
    Description,
    ThumbSwatchesWrapper,
} from './Product.styled'

import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Button, { ButtonProps } from '../../components/Button'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'
import TextSwatches, { TextSwatchesProps } from '../../components/Form/TextSwatches'
import ThumbSwatches, { ThumbSwatchesProps } from '../../components/Form/ThumbSwatches'
import { ProductDetailsSkeleton } from './ProductDetails.skeleton'
import { ProductImageSkeleton } from './ProductImage.skeleton'
import Form, { Input } from '../../components/Form'

export type ProductProps = {
    loading?: boolean
    categories?: BreadcrumbsProps
    addToCartButton: ButtonProps
    shortDescription?: string
    description?: string
    gallery: ImageProps[]
    price: PriceProps

    options?: Array<
        | {
              _id?: string | number
              type: 'text'
              swatches: TextSwatchesProps
          }
        | {
              _id?: string | number
              type: 'thumb'
              swatches: ThumbSwatchesProps
          }
    >

    sku: Props<{
        text: string
    }>
    title: Props<{
        text: string
    }>

    onAddToCart?: (...args: any) => any
    onChange?: (...args: any) => any
}

export const Product: Component<ProductProps> = ({
    loading,
    children,
    shortDescription,
    description,
    categories,
    addToCartButton,
    gallery,
    price,
    sku,
    options,
    title,
    onAddToCart = () => {},
    onChange = () => {},
    ...props
}) => {
    const [scrollerRef, setScrollerRef] = useState<MutableRefObject<Element>>()

    const infoRef = useRef<HTMLDivElement>(null)

    /**
     * Scroll to top if there are any errors
     */
    const handleOnErrors = useCallback(
        errors => {
            if (Object.entries(errors).length > 0 && infoRef.current) {
                infoRef.current.scrollIntoView({ behavior: 'smooth' })
            }
        },
        [infoRef.current]
    )

    return (
        <Root as={Form} onSubmit={onAddToCart} onValues={onChange} onErrors={handleOnErrors} {...props}>
            <Wrapper>
                <Images>
                    {/* Mobile Gallery Carousel */}
                    <CarouselWrapper
                        as={Carousel}
                        scrollerRef={setScrollerRef}
                        gap={1}
                        padding={3}
                        show={1}
                        snap
                        hideScrollBar
                    >
                        {!gallery ? (
                            <CarouselItem as={Carousel.Item}>
                                <ProductImageSkeleton style={{ width: '100%' }} />
                            </CarouselItem>
                        ) : (
                            gallery?.map((image, index) => (
                                <CarouselItem key={index} as={Carousel.Item}>
                                    <Image
                                        {...image}
                                        transition
                                        vignette={10}
                                        lazy={{
                                            container: scrollerRef,
                                            ...image.lazy,
                                        }}
                                    />
                                </CarouselItem>
                            ))
                        )}
                    </CarouselWrapper>

                    {/* Tablet and Desktop Gallery Grid */}
                    <GalleryGrid>
                        {!gallery ? (
                            <>
                                <CarouselItem as={Carousel.Item}>
                                    <ProductImageSkeleton style={{ width: '100%', height: '740px' }} />
                                </CarouselItem>
                                <CarouselItem as={Carousel.Item}>
                                    <ProductImageSkeleton style={{ width: '100%', height: '740px' }} />
                                </CarouselItem>
                            </>
                        ) : (
                            gallery.map((image, index) => (
                                <CarouselItem key={index}>
                                    <Image {...image} transition vignette={10} lazy={{ ...image.lazy }} />
                                </CarouselItem>
                            ))
                        )}
                    </GalleryGrid>
                </Images>
                <InfoWrapper ref={infoRef}>
                    <InfoInnerWrapper>
                        <Info>
                            {loading ? (
                                <ProductDetailsSkeleton
                                    style={{ width: '56rem', minWidth: '100%', maxWidth: '100%' }}
                                />
                            ) : (
                                <React.Fragment>
                                    <Header>
                                        {categories && <Breadcrumbs prefix="#" {...categories} />}
                                        <Title {...title}>{title?.text}</Title>
                                        <Price {...price} />
                                        <Sku {...sku}>{sku?.text}</Sku>
                                    </Header>

                                    {shortDescription && (
                                        <ShortDescription dangerouslySetInnerHTML={{ __html: shortDescription }} />
                                    )}

                                    {options && (
                                        <InfoOptions>
                                            {options.map(({ _id, type, swatches }, index) => {
                                                return (
                                                    <fieldset key={_id || index}>
                                                        <Field>
                                                            {type === 'text' && (
                                                                <TextSwatches {...(swatches as TextSwatchesProps)} />
                                                            )}
                                                            {type === 'thumb' && (
                                                                <ThumbSwatchesWrapper>
                                                                    <ThumbSwatches
                                                                        {...(swatches as ThumbSwatchesProps)}
                                                                    />
                                                                </ThumbSwatchesWrapper>
                                                            )}
                                                        </Field>
                                                    </fieldset>
                                                )
                                            })}
                                        </InfoOptions>
                                    )}

                                    <Buttons>
                                        <Button {...addToCartButton} />
                                    </Buttons>

                                    <Input type="hidden" name="quantity" value={1} rules={{ required: true }} />

                                    {description && <Description dangerouslySetInnerHTML={{ __html: description }} />}
                                </React.Fragment>
                            )}
                        </Info>
                    </InfoInnerWrapper>
                </InfoWrapper>
            </Wrapper>
        </Root>
    )
}
