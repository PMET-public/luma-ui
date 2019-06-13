import React, { FunctionComponent } from 'react'
import Svg from 'react-svg'
import { mergeString, getbem } from '../../lib/helpers'

export type IconProps = {
    className?: string
    count?: number
    label?: string
    name: string
    size?: number
}

export const Icon: FunctionComponent<IconProps> = ({
    className,
    count,
    label,
    name,
    size = 24,
}) => {
    let icon = ''

    try {
        icon = require(`./svgs/${name}.svg`)
    } catch (e) { }

    return (
        <span className={mergeString('icon', className)}
            style={{ ['--icon-size' as any]: size }}
        >
            <span className="icon__wrapper">
                <Svg src={icon} wrapper="span" />

                {count ? (
                    <span className={getbem('icon__count', ['over', count > 99])}>
                        {count > 99 ? 99 : count}
                    </span>
                ) : null}
            </span>

            {label ? (
                <span className="icon__label">{label}</span>
            ) : null}
        </span>
    )
}
