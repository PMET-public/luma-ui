import React, { useMemo, useRef, useCallback } from 'react'
import { Component, Props } from '../../lib'
import { isPageBuilderHtml } from '../../components/PageBuilder/lib/utils'
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
import Field, { FieldProps } from '../../components/Form/Field'
import TextSwatches, { TextSwatchesProps } from '../../components/Form/TextSwatches'
import ThumbSwatches, { ThumbSwatchesProps } from '../../components/Form/ThumbSwatches'

// const TextSwatches = React.lazy(() => import('../../components/TextSwatches'))
// const ThumbSwatches = React.lazy(() => import('../../components/ThumbSwatches'))

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
            required?: boolean
        } & FieldProps &
            ({ type: 'text'; swatches: TextSwatchesProps } | { type: 'thumb'; swatches: ThumbSwatchesProps })
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
    const { register, handleSubmit, errors, setError, getValues, formState } = useForm()

    const infoElemRef = useRef<HTMLDivElement>(null)

    const descriptionAsPageBuilderContent = useMemo(() => {
        return !!description && isPageBuilderHtml(description.html)
    }, [description && description.html])

    const handleOnValueChanges = useCallback(() => {
        const values = getValues({ nest: true })
        onChange(values)
    }, [onChange])

    const handleOnAddToCartClick = useCallback(() => {
        if (!formState.isValid && infoElemRef.current) infoElemRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [formState.isValid, infoElemRef.current])

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
                                                <Field label={label} error={error}>
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

                                    <Buttons>
                                        <Button onClick={handleOnAddToCartClick} {...addToCartButton} />
                                    </Buttons>
                                </InfoOptions>
                            )}

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
