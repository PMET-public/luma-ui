import React, { FunctionComponent, useRef, useEffect, useState } from 'react'
import CodeBlock from '../CodeBlock'
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

            <div className="color-swatch__value">
                <CodeBlock>{colorValue}</CodeBlock>
            </div>

            <div className="color-swatch__value">
                <code>.</code><CodeBlock>{`
                    color-${color}
                `}</CodeBlock><br />
            </div>

            <div className="color-swatch__value">
                <CodeBlock lang="css">{`
                    var(--color-${color})
                `}</CodeBlock>
            </div>

            <div
                className="color-swatch__info"
                style={{
                    backgroundColor: `var(--color-on-${color})`,
                    color: `var(--color-${color})`,
                }}
            >
                <div className="color-swatch__value">
                    <CodeBlock>{onColorValue}</CodeBlock><br />
                </div>

                <div className="color-swatch__value">
                    <CodeBlock lang="css">{`
                        var(--color-on-${color})
                    `}</CodeBlock>
                </div>
            </div>
        </Card>
    )
}
