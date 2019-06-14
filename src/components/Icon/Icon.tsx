import React, { FunctionComponent, useEffect, useState, HTMLAttributes } from 'react'
import { mergeString, getbem } from '../../lib/helpers'

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
}) => {

    const [svg, setSvg] = useState('')

    useEffect(() => {
        fetch(src)
            .then(res => res.text())
            .then(setSvg)

    }, [src])

    return (
        <span className={mergeString('icon', className)} {...props}>
            <span className={getbem('icon__wrapper', ['has-count', typeof count === 'number'])}>
                <span className="icon__svg" dangerouslySetInnerHTML={{ __html: svg }}></span>

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
}
