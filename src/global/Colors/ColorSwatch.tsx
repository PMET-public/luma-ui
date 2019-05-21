import React, { FunctionComponent, useRef, useEffect, useState } from 'react'
import Copy from '../Copy';

type Props = {
    color: string
}

export const ColorSwatch: FunctionComponent<Props> = ({ color }) => {

    const colorWatchEl: any = useRef(null)
    const [colorValue, setColorValue] = useState('#ccc')
    const [onColorValue, setOnColorValue] = useState('#fff')

    useEffect(() => {
        const computerStyle = getComputedStyle(colorWatchEl.current)
        setColorValue(computerStyle.getPropertyValue(`--color-${color}`).trim())
        setOnColorValue(computerStyle.getPropertyValue(`--color-on-${color}`).trim())
    }, [color])

    return (
        <div
            className={`color-swatch color-${color}`}
            ref={colorWatchEl}
            style={{
                borderColor: `var(--color-${color})`,
            }}
        >
            <h2 className="color-swatch_title">
                {color}
            </h2>

            <code className="color-swatch__value">
                <Copy value={colorValue} />
            </code>

            <code className="color-swatch__value">
                <strong>html</strong>.<Copy value={`color-${color}`} /><br/>                
                <strong>less</strong><Copy value={`@color-${color}`} /><br/>
                <strong>css</strong><Copy value={`var(--color-${color})`} />
            </code>

            <div
                className="color-swatch__info"
                style={{
                    color: `var(--color-${color})`,
                    backgroundColor: `var(--color-on-${color})`,
                }}
            >
                <code className="color-swatch__value">
                    <Copy value={onColorValue} /><br/>
                </code>

                <code className="color-swatch__value">
                    <strong>less</strong><Copy value={`@color-on-${color}`} /><br/>
                    <strong>css</strong><Copy value={`var(--color-on-${color})`} />
                </code>
            </div>
        </div>
    )
}
