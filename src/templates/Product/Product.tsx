import React, { useMemo, useRef, useCallback, useEffect } from 'react'
import { Component, Props } from '../../lib'
import { isPageBuilderHtml } from '../../components/PageBuilder/lib/utils'
import {
    Root,
    Wrapper,
    Images,
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

import Carousel from '../../components/Carousel'
import Image, { ImageProps } from '../../components/Image'
import Price, { PriceProps } from '../../components/Price'
import Button, { ButtonProps } from '../../components/Button'
import PageBuilder, { PageBuilderProps } from '../../components/PageBuilder'
import Breadcrumbs, { BreadcrumbsProps } from '../../components/Breadcrumbs'
import TextSwatches, { TextSwatchesProps } from '../../components/Form/TextSwatches'
import ThumbSwatches, { ThumbSwatchesProps } from '../../components/Form/ThumbSwatches'

export type ProductProps = {
    categories?: BreadcrumbsProps
    addToCartButton: ButtonProps
    shortDescription?: string
    description?: PageBuilderProps
    gallery: ImageProps[]
    price: PriceProps

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
    title: Props<{
        text: string
    }>

    onAddToCart?: (...args: any) => any
    onChange?: (...args: any) => any
}

export const Product: Component<ProductProps> = ({
    description,
    shortDescription,
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

    const descriptionAsPageBuilderContent = useMemo(() => {
        return !!description && isPageBuilderHtml(description.html)
    }, [description && description.html])

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
                        {gallery.map((image, index) => (
                            <Carousel.Item key={index}>
                                <Image transition vignette={10} {...image} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Images>

                <InfoWrapper ref={infoElemRef}>
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
