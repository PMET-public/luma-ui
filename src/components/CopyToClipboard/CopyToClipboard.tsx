import React, { FunctionComponent, useState, useRef } from 'react'
import { stripIndent } from 'common-tags'
import { getClassNamesWithModifier } from '../../lib/helpers'

type Props = { 
    label?: string
    children: string
}

export const CopyToClipboard: FunctionComponent<Props> = ({ children, label }) => {

    const [hasCopied, setHasCopied] = useState(false)
    const [hasFailed, setHasFailed] = useState(false)
    const inputEl: any = useRef(null)

    function triggerSelect() {
        // inputEl.current.select()
        const selection: any = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(inputEl.current);
        selection.removeAllRanges();
        selection.addRange(range);
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

    return children ? (
        <div 
            aria-label={`Copy to clipboard`}
            className={
                getClassNamesWithModifier('copy',
                    ['success', hasCopied],
                    ['failed', hasFailed]
                )
            }
            onClick={triggerCopy} 
        >

            { label && <strong className="copy__label">{label}</strong> }
        
            <pre className="copy__content" ref={inputEl}>{stripIndent`${children}`}</pre>
           
        </div>
    ) : null
}
