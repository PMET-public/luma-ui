import React, { FunctionComponent, HTMLAttributes, ReactElement } from 'react'
import { mergeString, getbem } from '../../lib/helpers'
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
        <span className={mergeString('icon', className)} {...props}>
            <span className={getbem('icon__wrapper', ['has-count', typeof count === 'number'])}>

                <span className="icon__svg">
                    {svg}
                </span>

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
