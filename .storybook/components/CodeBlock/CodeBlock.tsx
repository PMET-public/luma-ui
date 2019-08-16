import React, { FunctionComponent, useEffect, useState, ReactElement, useRef } from 'react'
import { stripIndent } from 'common-tags'
import prism from 'prismjs'
import { classNames } from '../../../src/lib'
import './prism.css'
import styles from './CodeBlock.css'

import 'prismjs/components/prism-less'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-bash'

export type CodeBlockProps = { children: string } & ({
    lang: 'tsx' | 'jsx' | 'graphql' | 'bash'
    render?: undefined
} | {
    lang: 'html' | 'css' | 'less' | 'js' | 'typescript'
    render?: boolean
})

/**
 * Renders
 */

export const renderHTML = (htmlSource: string): ReactElement => (
    <div dangerouslySetInnerHTML={{ __html: htmlSource }} />
)

export const renderCSS = (cssSource: string) => (
    <style dangerouslySetInnerHTML={{ __html: cssSource }} />
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
        <div
            className={classNames(styles.root,
                [styles.error, copyStatus === -1],
                [styles.success, copyStatus === 1]
            )}
        >

            {render && lang === 'html' && renderHTML(children)}

            {render && lang === 'css' && renderCSS(children)}

            {/* {render && lang === 'less' && renderLESS(children)} */}

            <div onDoubleClick={triggerCopy}>
                <span className={styles.label}>{lang}</span>
                <pre className={styles.pre}>
                    <code
                        className={styles.source}
                        dangerouslySetInnerHTML={{ __html: source }}
                        ref={inputEl}
                        spellCheck={false}
                    ></code>
                </pre>
            </div>
        </div>
    )
}
