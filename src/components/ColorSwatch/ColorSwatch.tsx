import React, { FunctionComponent, useRef, useEffect, useState } from 'react'
import CopyToClipboard from '../CopyToClipboard';

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
                <CopyToClipboard>{colorValue}</CopyToClipboard>
            </code>

            <code className="color-swatch__value" data-label-before="html">
                <CopyToClipboard label="html">{`
                    color-${color}
                `}</CopyToClipboard><br />
            </code>

            <code className="color-swatch__value" data-label-before="css">
                <CopyToClipboard label="css">{`
                    var(--color-${color})
                `}</CopyToClipboard>
            </code>


            <div
                className="color-swatch__info"
                style={{
                    color: `var(--color-${color})`,
                    backgroundColor: `var(--color-on-${color})`,
                }}
            >
                <code className="color-swatch__value">
                    <CopyToClipboard>{onColorValue}</CopyToClipboard><br />
                </code>

                <code className="color-swatch__value" data-label-before="css">
                    <CopyToClipboard label="css">{`
                        var(--color-on-${color})
                    `}</CopyToClipboard>
                </code>
            </div>
        </div>
    )
}
