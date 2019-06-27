import React, { FunctionComponent, HTMLAttributes, ReactElement } from 'react'
import { SvgProperties } from 'csstype'
import {useTransition, animated} from 'react-spring'

export type IconProps = {
    count?: number
    label?: string
    children: ReactElement<SvgProperties>
} & HTMLAttributes<HTMLSpanElement>

export const Icon: FunctionComponent<IconProps> = ({
    count,
    label,
    children,
}) => {    
    const countTransitions = useTransition(count, p => p, {
        from: { position: 'absolute', opacity: 0, transform: 'scale(0) translateY(-4rem)', transformOrigin: 'center' },
        enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
        leave: { opacity: 0, transform: 'scale(0) translateY(4rem)' },
    })
    
    return (
        <span className="icon">
            <span className="icon__wrapper">

                <span className="icon__svg">
                    {children}
                </span>

                {countTransitions.map(({ item, props, key }) => item ? (
                    <animated.span className="icon__count" style={props} key={key}>
                        {item > 99 ? '+99' : count}
                    </animated.span>
                ) : null)}
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

                .icon :global(a) {
                    border: 0 none !important;
                    text-decoration: none !important;
                }

                .icon__svg :global(svg) {
                    height: 1em;
                    width: auto;
                }

                .icon__svg :global(svg *) {
                    fill: none;
                    stroke: currentColor;
                } 

                .icon__wrapper {
                    position: relative;
                    margin-right: ${typeof count === 'number' ? '0.4em' : 0}
                }

                .icon__label {
                    color: inherit;
                    font-size: 0.45em;
                    font-weight: 600;
                    text-overflow: ellipsis;
                    padding-right: ${typeof count === 'number' ? '0.9em' : 0};
                }

                .icon :global(.icon__count) {
                    align-items: center;
                    color: inherit;
                    display: flex;
                    font-size: 0.5em;
                    justify-content: center;
                    left: calc(100% + 0.1em);
                    position: absolute;
                    top: -0.3em;
                }
            `}</style>
        </span>
    )
}
