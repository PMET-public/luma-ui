import React, { FunctionComponent, useState, useRef } from 'react'
import { getClassNamesWithModifier } from '../../lib/helpers'

type Props = {
    value: string
}

export const Copy: FunctionComponent<Props> = ({ value }) => {

    const [hasCopied, setHasCopied] = useState(false)
    const [hasFailed, setHasFailed] = useState(false)
    const inputEl: any = useRef(null)

    function triggerSelect() {
        inputEl.current.select()
    }

    function triggerCopy() {

        try {
            triggerSelect()
            
            document.execCommand('copy')

            setHasCopied(true)

            setTimeout(() => {
                setHasCopied(false)
            }, 1500)

        } catch (err) {
            console.error(err)

            setHasFailed(true)

            setTimeout(() => {
                setHasFailed(false)
            }, 1500)
        }

    }

    return value ? (
        <span className={getClassNamesWithModifier('copy',
            ['success', hasCopied],
            ['failed', hasFailed]
        )} >
            <input
                aria-label={`Copy ${value} to clipboard`}
                className="copy__input"
                onClick={triggerCopy}
                readOnly
                ref={inputEl}
                size={value.length}
                type="text"
                value={value}
            />
        </span>
    ) : null
}
