import React, { FunctionComponent } from 'react'
import Svg from 'react-svg'
import { mergeString } from '../../lib/helpers'

export type IconProps = {
    className?: string
    name?: string
    size?: number
}

export const Icon: FunctionComponent<IconProps> = ({
    className,
    name,
    size = 24,
}) => {
    let icon = ''

    try {
        icon = require(`./svgs/${name}.svg`)
    } catch (e) { }

    return (
        <Svg className={mergeString('icon', className)}
            src={icon}
            style={{ ['--icon-size' as any]: size }}
            wrapper="span"
        />
    )
}
