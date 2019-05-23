import React, { FunctionComponent, useState, useRef, useEffect, Fragment } from 'react'
import { stripIndent } from 'common-tags'
import { getbem } from "../../lib/helpers"
import Prism from 'prismjs'

/** Prims Extra Languages */
require('prismjs/components/prism-sass.js')
require('prismjs/components/prism-jsx.js')
require('prismjs/components/prism-typescript.js')

export type CodeBlockProps = { children: string } & ({
    lang?: string,
    render?: undefined,
} | {
    lang: 'html' | 'css' | 'js',
    render?: boolean,
})

const execJs = (script: string) => {
    const scriptEl = document.createElement('script')
    scriptEl.innerHTML = script
    document.body.append(scriptEl)
}

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({ children, lang, render = false }) => {

    const [hasCopied, setHasCopied] = useState(false)
    const [hasFailed, setHasFailed] = useState(false)
    const inputEl: any = useRef(null)
    const source = stripIndent`${children}`

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
        if (lang) Prism.highlightAll()
    }, [children, lang])

    return children ? (
        <Fragment>

            {render && lang === 'html' && <div
                className="code-block__render-html"
                dangerouslySetInnerHTML={{ __html: source }}
            ></div>}

            {render && lang === 'css' && <style
                dangerouslySetInnerHTML={{ __html: source }}
            ></style>}

            {render && lang === 'js' && execJs(source)}

            <pre
                aria-label={`Copy to clipboard`}
                className={
                    getbem('code-block',
                        ['success', hasCopied],
                        ['failed', hasFailed],
                    )
                }
                onClick={triggerCopy}
            >

                {lang && <strong className="code-block__label">{lang}</strong>}

                <code
                    className={`language-${lang} code-block__content`}
                    ref={inputEl}
                >{source}</code>
            </pre>
        </Fragment>
    ) : null
}
