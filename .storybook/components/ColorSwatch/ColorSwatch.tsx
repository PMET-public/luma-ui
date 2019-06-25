import React, { FunctionComponent, useRef, useEffect, useState } from 'react'
import Card from '../Card'

type ColorSwatchProps = {
    color: string
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

            <style global jsx>{`
                .color-swatch {
                    display: flex;
                    flex-direction: column;
                    font-size: 1.3rem;
                    line-height: 1.5;
                    position: relative;
                }

                .color-swatch__info {
                    justify-self: flex-end;
                    border-radius: 1rem;
                    padding: 1rem 0.5rem;
                    margin-top: 2rem;
                }

                .color-swatch_title {
                    font-family: var(--font-family-heading);
                    font-size: 2rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    padding: 0 0.75rem;
                    text-transform: uppercase;
                }

                .color-swatch__value {
                    display: block;
                    padding: 0.5rem 1rem;
                }

                .color-swatch__value .token {
                    color: inherit !important;
                }
            `}</style>
        </Card>
    )
}
