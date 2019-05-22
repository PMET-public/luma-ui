import React, { FunctionComponent, useRef, useEffect, useState } from 'react'
import CodeBlock from '../CodeBlock';

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

            <div className="color-swatch__value">
                <CodeBlock>{colorValue}</CodeBlock>
            </div>

            <div className="color-swatch__value" data-label-before="html">
                <CodeBlock language="html">{`
                    color-${color}
                `}</CodeBlock><br />
            </div>

            <div className="color-swatch__value" data-label-before="css">
                <CodeBlock language="css">{`
                    var(--color-${color})
                `}</CodeBlock>
            </div>


            <div
                className="color-swatch__info"
                style={{
                    color: `var(--color-${color})`,
                    backgroundColor: `var(--color-on-${color})`,
                }}
            >
                <div className="color-swatch__value">
                    <CodeBlock>{onColorValue}</CodeBlock><br />
                </div>

                <div className="color-swatch__value" data-label-before="css">
                    <CodeBlock language="css">{`
                        var(--color-on-${color})
                    `}</CodeBlock>
                </div>
            </div>
        </div>
    )
}
