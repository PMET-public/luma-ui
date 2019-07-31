import React, { ReactNode } from 'react'
import { Component, Props, Element, classes } from '../../lib'

export type HtmlProps = Props<{ 
    __html: string
}>

export const Html: Component<HtmlProps> = ({ 
    __html,
    ...props
}) => {
    
    return (
        <Element {...props} className={classes('html', props.className)}>
            {__html && (
                <div dangerouslySetInnerHTML={{ __html }} />
            )}

            <style jsx global>{`
                .html {
                    line-height: 1.5;

                    & h1,
                    & h2,
                    & h3,
                    & h4,
                    & h5,
                    & h6 {
                        margin-bottom: 1.4rem;
                    }

                    & p {
                        margin-bottom: 1rem;
                    }

                    & ol, & ul {
                        list-style-position: inside;
                        margin-left: 1rem;
                    }

                    & ul {
                        list-style-position: inside;
                    }

                    & ol {
                        list-style-type: decimal;
                    }

                    & strong {
                        font-weight: 600;
                    }

                    & em {
                        font-style: italic;
                    }
                }
            `}</style>
        </Element>
    )
}
