import React, { FunctionComponent, useEffect, Fragment, useState, ReactElement, useRef } from 'react'
import { stripIndent } from 'common-tags'
import { getbem } from '../../../src/lib/helpers'
import less from 'less'
import prism from 'prismjs'
import Card from '../Card'

import 'prismjs/components/prism-less'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-bash'

export type CodeBlockProps = { children: string } & ({
    lang: 'tsx' | 'jsx' | 'graphql' | 'bash'
    render?: undefined
} | {
    lang: 'html' | 'css' | 'less' | 'js'
    render?: boolean
})

/**
 * Renders
 */

export const renderLESS = (lessSource: string): ReactElement => {
    return <style type="text/less" dangerouslySetInnerHTML={{ __html: lessSource }}></style>
}

export const renderHTML = (htmlSource: string): ReactElement => (
    <div
        className="code-block__render-html"
        dangerouslySetInnerHTML={{ __html: htmlSource }}
    ></div>
)

export const renderCSS = (cssSource: string) => (
    <style dangerouslySetInnerHTML={{ __html: cssSource }}></style>
)

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({
    children,
    lang,
    render = false,
}) => {
    const [source, setSource] = useState('')
    const [copyStatus, setCopyStatus] = useState(0)
    const inputEl: any = useRef()

    useEffect(() => {
        const highlightedSource = stripIndent(prism.highlight(children, prism.languages[lang], lang))

        setSource(highlightedSource)

        if (render && lang === 'less') less.refreshStyles()
        
        if (render && lang === 'js') {
            // tslint:disable-next-line: no-eval
            eval(children)
        }
    }, [children, source, render])

    const triggerCopy = () => {
        try {
            const selection: any = window.getSelection()
            const range = document.createRange()
            range.selectNodeContents(inputEl.current)
            selection.removeAllRanges()
            selection.addRange(range)
            document.execCommand('copy')

            setCopyStatus(1)

            setTimeout(() => {
                setCopyStatus(0)
            }, 1500)

        } catch (err) {
            setCopyStatus(-1)

            setTimeout(() => {
                setCopyStatus(0)
            }, 1500)
        }

    }

    return (
        <Fragment>

            {render && lang === 'html' && renderHTML(children)}

            {render && lang === 'css' && renderCSS(children)}

            {render && lang === 'less' && renderLESS(children)}

            <Card
                className={getbem(`code-block`, ['success', copyStatus === 1], ['error', copyStatus === -1])}
                onDoubleClick={triggerCopy}
            >
                <span className="code-block__label">{lang}</span>
                <pre>
                    <code
                        className="code-block__source"
                        dangerouslySetInnerHTML={{ __html: source }}
                        ref={inputEl}
                        spellCheck={false}
                    ></code>
                </pre>
            </Card>

        </Fragment>
    )
}
