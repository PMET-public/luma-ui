import React, { FunctionComponent } from 'react'

export type ImageCaptionProps = {}

export const ImageCaption: FunctionComponent<ImageCaptionProps> = ({ children }) => (
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
