import React, { FunctionComponent, HTMLProps } from 'react'
import { useTheme } from '../../hooks/useTheme'

export type ImageProps = {
    src: string
    alt: string
} & HTMLProps<HTMLElement>

export type ImageCaptionProps = {}

export type ImageTitleProps = {}

type CompoundComponent = {
    Caption: FunctionComponent<ImageCaptionProps>
    Title: FunctionComponent<ImageTitleProps>
}

export const Image: FunctionComponent<ImageProps> & CompoundComponent = ({
    alt,
    children,
    src,
}) => (
    <figure className="image">
        <img className="image__img"
            alt={alt}
            src={src}
        />

        {children && (
            <figcaption>
                {children}
            </figcaption>
        )}

        <style jsx>{`
            .image {
                position: relative;
                width: 100%;
            }

            .image__img {
                max-height: 100%;
                object-fit: cover;
                object-position: center;
                overflow: hidden;
                max-width: 100%;
            }
        `}</style>
    </figure>
)

Image.Caption = ({ children }) => (
    <span className="image-caption">
        {children}

        <style jsx>{`
            .image-caption {
                display: block;
                padding: 0.8rem 0.5rem;
            }    
        `}</style>
    </span>
)

Image.Title = ({ children }) => {
    const { typography } = useTheme()

    return (
        <span className="image-title">
            {children}

            <style jsx>{`
                .image-title {
                    font-family: ${typography.headings.family};
                    font-weight: ${typography.headings.weight};
                    text-transform: uppercase;
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 8vw;
                }    
            `}</style>
        </span>
    )
}
