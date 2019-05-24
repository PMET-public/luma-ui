import React, { FunctionComponent, useRef, useEffect, useState } from 'react'
import Card from '../Card'

type ColorSwatchProps = {
    color: string,
}

export const ColorSwatch: FunctionComponent<ColorSwatchProps> = ({ color }) => {

    const colorWatchEl: any = useRef(null)
    const [colorValue, setColorValue] = useState('#ccc')
    const [onColorValue, setOnColorValue] = useState('#fff')

    useEffect(() => {
        const computerStyle = getComputedStyle(colorWatchEl.current)
        setColorValue(computerStyle.getPropertyValue(`--color-${color}`).trim())
        setOnColorValue(computerStyle.getPropertyValue(`--color-on-${color}`).trim())
    }, [color])

    return (
        <Card
            className={`color-swatch color-${color}`}
            ref={colorWatchEl}
            style={{
                borderColor: `var(--color-${color})`,
                padding: '0.5rem',
            }}
        >
            <h2 className="color-swatch_title">
                {color}
            </h2>

            <code className="color-swatch__value">
                {colorValue}
            </code>

            <code className="color-swatch__value">
                .color-{color}
            </code>

            <code className="color-swatch__value">
                var(--color-{color})
            </code>

            <div
                className="color-swatch__info"
                style={{
                    backgroundColor: `var(--color-on-${color})`,
                    color: `var(--color-${color})`,
                }}
            >
                <code className="color-swatch__value">
                    {onColorValue}
                </code>

                <code className="color-swatch__value">
                   var(--color-on-{color})
                </code>
            </div>
        </Card>
    )
}
