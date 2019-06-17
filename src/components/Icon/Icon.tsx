import React, { FunctionComponent, HTMLAttributes } from 'react'
import { mergeString, getbem } from '../../lib/helpers'

const ReactSVG = require('react-svg').default

export type IconProps = {
    className?: string
    count?: number
    label: string
    src: string
} & HTMLAttributes<HTMLSpanElement>

export const Icon: FunctionComponent<IconProps> = ({
    className,
    count,
    label,
    src,
    ...props
}) => (
        <span className={mergeString('icon', className)} {...props}>
            <span className={getbem('icon__wrapper', ['has-count', typeof count === 'number'])}>

                <ReactSVG className="icon__svg"
                    src={src}
                    wrapper="span"
                />

                {count ? (
                    <span className={getbem('icon__count', ['over', count > 99])} >
                        {count > 99 ? 99 : count}
                    </span>
                ) : null}
            </span>

            {label ? (
                <span className="icon__label">
                    {label}
                </span>
            ) : null}
        </span>
    )
