import React, { FunctionComponent, useState, useRef, useEffect, Fragment, ReactElement } from 'react'
import { stripIndent } from 'common-tags'
import { getbem } from "../../lib/helpers"
import Prism from 'prismjs'
import less from 'less'

/** Prims Extra Languages */
require('prismjs/components/prism-less.js')
require('prismjs/components/prism-jsx.js')
require('prismjs/components/prism-typescript.js')

export type CodeBlockProps = { children: string } & ({
    hideSource?: undefined,
    lang?: string,
    render?: undefined,
} | {
    hideSource?: boolean,
    lang: 'html' | 'css' | 'js' | 'less',
    render?: boolean,
})

/**
 * Renders
 */
export const renderJS = (script: string): void => {
    const scriptEl = document.createElement('script')
    scriptEl.innerHTML = script
    document.body.append(scriptEl)
}

export const renderLESS = (source: string): ReactElement => {
    return <style type="text/less" dangerouslySetInnerHTML={{ __html: source }}></style>
}

export const renderHTML = (source: string): ReactElement => (
    <div
        className="code-block__render-html"
        dangerouslySetInnerHTML={{ __html: source }}
    ></div>
)

const renderCSS = (source: string) => (
    <style dangerouslySetInnerHTML={{ __html: source }}></style>
)

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({
    children,
    lang,
    render = false,
    hideSource = false,
}) => {

    const [hasCopied, setHasCopied] = useState(false)
    const [hasFailed, setHasFailed] = useState(false)
    const inputEl: any = useRef(null)
    const source = stripIndent`${children}`

    const triggerSelect = () => {
        const selection: any = window.getSelection()
        const range = document.createRange()
        range.selectNodeContents(inputEl.current)
        selection.removeAllRanges()
        selection.addRange(range)
    }

    const triggerCopy = () => {

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
        if (lang === 'less') less.refreshStyles()
    }, [children, lang])

    return children ? (
        <Fragment>

            {render && lang === 'html' && renderHTML(source)}

            {render && lang === 'css' && renderCSS(source)}

            {render && lang === 'less' && renderLESS(source)}

            {render && lang === 'js' && renderJS(source)}

            {hideSource === false && (
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
            )}
        </Fragment>
    ) : null
}
