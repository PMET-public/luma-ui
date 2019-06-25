import React, { FunctionComponent } from 'react'
import { useTheme } from '../../hooks/useTheme'

export type ImageTitleProps = {}

export const ImageTitle: FunctionComponent<ImageTitleProps> = ({ children }) => {
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
                    bottom: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 3rem;
                }    
            `}</style>
        </span>
    )
}
