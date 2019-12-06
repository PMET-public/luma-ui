import React, { useRef, useCallback, useEffect } from 'react'
import { Component, Props } from '../../lib'
import {
    Root,
    Wrapper,
    Images,
    CarouselItem,
    InfoWrapper,
    InfoInnerWrapper,
    InfoOptions,
    Field,
    Label,
    Info,
    Header,
    Title,
    Sku,
    Buttons,
    ShortDescription,
    Description,
} from './Product.styled'

import useForm from 'react-hook-form'

import Image, { ImageProps } from '../../components/Image'
import Carousel from '../../components/Carousel'
import Price, { PriceProps } from '../../components/Price'
import Button, { ButtonProps } from '../../components/Button'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'
import TextSwatches, { TextSwatchesProps } from '../../components/Form/TextSwatches'
import ThumbSwatches, { ThumbSwatchesProps } from '../../components/Form/ThumbSwatches'
import ContentLoader from 'react-content-loader'

export type ProductProps = {
    categories?: BreadcrumbsProps
    addToCartButton: ButtonProps
    shortDescription?: string
    description?: string
    gallery?: ImageProps[]
    price?: PriceProps

    options?: Array<
        {
            _id?: string | number
            label?: string
            required?: boolean
            error?: string | boolean
        } & (
            | {
                  type: 'text'
                  swatches: TextSwatchesProps
              }
            | {
                  type: 'thumb'
                  swatches: ThumbSwatchesProps
              })
    >

    sku?: Props<{
        text: string
    }>
    title?: Props<{
        text: string
    }>

    onAddToCart?: (...args: any) => any
    onChange?: (...args: any) => any
}

export const Product: Component<ProductProps> = ({
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
    const { register, handleSubmit, errors, setError, getValues } = useForm()

    const infoElemRef = useRef<HTMLDivElement>(null)

    const handleOnValueChanges = useCallback(() => {
        const values = getValues({ nest: true })
        onChange(values)
    }, [onChange])

    /**
     * Scroll to top if there are any errors
     */
    useEffect(() => {
        if (Object.entries(errors).length > 0 && infoElemRef.current) {
            infoElemRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [errors])

    return (
        <Root as="form" {...props} onSubmit={handleSubmit(onAddToCart)} onChange={handleOnValueChanges}>
            <Wrapper>
                <Images>
                    <Carousel gap={1} padding={3}>
                        {gallery ? (
                            gallery.map((image, index) => (
                                <CarouselItem key={index}>
                                    <Image transition vignette={10} {...image} />
                                </CarouselItem>
                            ))
                        ) : (
                            <CarouselItem>
                                <ContentLoader
                                    height={1480}
                                    width={1200}
                                    speed={2}
                                    style={{ width: '100%' }}
                                    primaryColor="rgba(204, 204, 204, 0.25)"
                                    secondaryColor="rgba(204, 204, 204, 0.35)"
                                >
                                    <rect x="0" y="70" rx="0" ry="0" width="100%" height="100%" />
                                </ContentLoader>
                            </CarouselItem>
                        )}
                    </Carousel>
                </Images>
                <InfoWrapper ref={infoElemRef}>
                    <InfoInnerWrapper>
                        <Info>
                            <Header>
                                {categories ? (
                                    <Breadcrumbs prefix="#" {...categories} />
                                ) : (
                                    <ContentLoader
                                        height={10}
                                        width={160}
                                        speed={2}
                                        primaryColor="rgba(204, 204, 204, 0.25)"
                                        secondaryColor="rgba(204, 204, 204, 0.35)"
                                        style={{ width: '16rem' }}
                                    >
                                        <rect x="0" y="0" rx="0" ry="0" width="50" height="10" />
                                        <rect x="55" y="0" rx="0" ry="0" width="50" height="10" />
                                        <rect x="110" y="0" rx="0" ry="0" width="50" height="10" />
                                    </ContentLoader>
                                )}
                                {title && title.text ? (
                                    <Title {...title}>{title.text}</Title>
                                ) : (
                                    <ContentLoader
                                        height={20}
                                        width={260}
                                        speed={2}
                                        primaryColor="rgba(204, 204, 204, 0.25)"
                                        secondaryColor="rgba(204, 204, 204, 0.35)"
                                        style={{ width: '100%' }}
                                    >
                                        <rect x="0" y="0" rx="0" ry="0" width="100%" height="20" />
                                    </ContentLoader>
                                )}
                                {price ? (
                                    <Price {...price} />
                                ) : (
                                    <ContentLoader
                                        height={10}
                                        width={60}
                                        speed={2}
                                        primaryColor="rgba(204, 204, 204, 0.25)"
                                        secondaryColor="rgba(204, 204, 204, 0.35)"
                                        style={{ width: '6rem' }}
                                    >
                                        <rect x="0" y="0" rx="0" ry="0" width="100%" height="10" />
                                    </ContentLoader>
                                )}
                                {sku && sku.text && <Sku {...sku}>{sku.text}</Sku>}
                            </Header>

                            {shortDescription && (
                                <ShortDescription dangerouslySetInnerHTML={{ __html: shortDescription }} />
                            )}

                            {options && (
                                <InfoOptions>
                                    {options.map(({ _id, error: _error, type, label, required, swatches }, index) => {
                                        const { name } = swatches
                                        const error = errors[name]

                                        if (_error) setError(name, typeof _error === 'string' ? _error : '')

                                        return (
                                            <fieldset key={_id || index}>
                                                <Field>
                                                    {label && <Label $error={!!error}>{label}</Label>}
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
                                                </Field>
                                            </fieldset>
                                        )
                                    })}
                                </InfoOptions>
                            )}

                            <Buttons>
                                <Button {...addToCartButton} />
                            </Buttons>

                            <input type="hidden" name="quantity" value={1} ref={register({ required: true })} />

                            {description ? (
                                <Description dangerouslySetInnerHTML={{ __html: description }} />
                            ) : (
                                <ContentLoader
                                    height={100}
                                    width={200}
                                    speed={2}
                                    primaryColor="rgba(204, 204, 204, 0.25)"
                                    secondaryColor="rgba(204, 204, 204, 0.35)"
                                    style={{ width: '100%' }}
                                >
                                    <rect x="0" y="0" rx="3" ry="3" width="70" height="10" />
                                    <rect x="80" y="0" rx="3" ry="3" width="100" height="10" />
                                    <rect x="190" y="0" rx="3" ry="3" width="10" height="10" />
                                    <rect x="15" y="20" rx="3" ry="3" width="130" height="10" />
                                    <rect x="155" y="20" rx="3" ry="3" width="130" height="10" />
                                    <rect x="15" y="40" rx="3" ry="3" width="90" height="10" />
                                    <rect x="115" y="40" rx="3" ry="3" width="60" height="10" />
                                    <rect x="185" y="40" rx="3" ry="3" width="60" height="10" />
                                    <rect x="0" y="60" rx="3" ry="3" width="30" height="10" />
                                </ContentLoader>
                            )}
                        </Info>
                    </InfoInnerWrapper>
                </InfoWrapper>
            </Wrapper>
        </Root>
    )
}
