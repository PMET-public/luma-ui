import React, { FunctionComponent } from 'react'
import { Root, Badge, ImageWrapper, Colors, Color, Details, Title, PriceWrapper } from './ProductItem.styled'

import Image, { ImageProps } from '../Image'
import Price, { PriceProps } from '../Price'
import ContentLoader, { IContentLoaderProps } from 'react-content-loader'

export type ProductItemProps = {
    badge?: {
        text: string
    }
    colors?: Array<{ label: string; value: string }>
    image: ImageProps
    price: PriceProps
    title: {
        text: string
    }
}

type CompoundComponent = {
    Skeleton: FunctionComponent<IContentLoaderProps>
}

export const ProductItem: FunctionComponent<ProductItemProps> & CompoundComponent = ({
    badge,
    colors,
    image,
    price,
    title,
    ...props
}) => {
    return (
        <Root {...props}>
            {!!badge && (
                <Badge as="span" {...badge}>
                    {badge.text}
                </Badge>
            )}

            <ImageWrapper>
                <Image width={4} height={5} vignette={0.5} {...image} />
            </ImageWrapper>

            {colors && (
                <Colors>
                    {colors.map(({ label, value, ...color }, index) => (
                        <Color arial-label={label} key={index} style={{ backgroundColor: value }} {...color} />
                    ))}
                </Colors>
            )}

            <Details>
                <Title {...title}>{title.text}</Title>

                <PriceWrapper>
                    <Price {...price} />
                </PriceWrapper>
            </Details>
        </Root>
    )
}

ProductItem.Skeleton = props => {
    return (
        <ContentLoader height={810} width={600} primaryColor="#f3f3f3" secondaryColor="#e6e6e6" {...props}>
            <rect x="16" y="762" rx="4" ry="4" width="60%" height="16" />
            <rect x="16" y="787" rx="4" ry="4" width="30%" height="15" />
            <rect x="0" y="0" rx="5" ry="5" width="600" height="750" />
        </ContentLoader>
    )
}
