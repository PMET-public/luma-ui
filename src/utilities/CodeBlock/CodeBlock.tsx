import React, { FunctionComponent, useState, useRef, useEffect } from 'react'
import { stripIndent } from 'common-tags'
import { getClassNamesWithModifier } from "../../lib/helpers"
import Prism from 'prismjs'

export type CodeBlockProps = {
    children: string,
    language?: string,
}

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({ children, language }) => {

    const [hasCopied, setHasCopied] = useState(false)
    const [hasFailed, setHasFailed] = useState(false)
    const inputEl: any = useRef(null)

    function triggerSelect() {
        const selection: any = window.getSelection()
        const range = document.createRange()
        range.selectNodeContents(inputEl.current)
        selection.removeAllRanges()
        selection.addRange(range)
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
            setHasFailed(true)

            setTimeout(() => {
                setHasFailed(false)
            }, 1500)
        }

    }

    useEffect(() => {
        if (language) Prism.highlightAll()
    }, [children, language])

    return children ? (
        <pre
            aria-label={`Copy to clipboard`}
            className={
                getClassNamesWithModifier('code-block',
                    ['success', hasCopied],
                    ['failed', hasFailed],
                )
            }
            onClick={triggerCopy}
        >

            {language && <strong className="code-block__label">{language}</strong>}

            <code
                className={`language-${language} code-block__content`}
                ref={inputEl}
                dangerouslySetInnerHTML={{ __html: stripIndent`${children}` }}
            />
        </pre>
    ) : null
}
