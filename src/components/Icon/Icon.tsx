import React, { FunctionComponent, HTMLAttributes, ReactElement } from 'react'
import { SvgProperties } from 'csstype'

export type IconProps = {
    className?: string
    count?: number
    label: string
    svg: ReactElement<SvgProperties>
} & HTMLAttributes<HTMLSpanElement>

export const Icon: FunctionComponent<IconProps> = ({
    className,
    count,
    label,
    svg,
    ...props
}) => (
        <span className="icon">
            <span className="icon__wrapper">

                <span className="icon__svg">
                    {svg}
                </span>

                {count ? (
                    <span className="icon__count" >
                        {count > 99 ? '+99' : count}
                    </span>
                ) : null}
            </span>

            {label ? (
                <span className="icon__label">
                    {label}
                </span>
            ) : null}

            <style jsx>{`
                .icon {
                    align-items: center;
                    color: inherit;
                    display: inline-flex;
                    flex-direction: column;
                    font-size: inherit;
                    line-height: 1;
                }

                .icon__svg :global(svg) {
                    width: auto;
                    height: 1em;
                }

                .icon__svg :global(svg *) {
                    fill: none;
                    stroke: currentColor;
                } 

                .icon__wrapper {
                    position: relative;
                }

                .icon__label {
                    font-size: 0.45em;
                    color: inherit;
                    font-weight: 600;
                    margin-top: 0.5rem;
                    text-overflow: ellipsis;
                }

                .icon__count {
                    font-size: 0.45em;
                    border-radius: 0.2em;
                    color: inherit;
                    left: 100%;
                    padding: 0.3em;
                    position: absolute;
                    top: -0.5em;
                    font-size: 0.5em;
                }
            `}</style>
        </span>
    )
