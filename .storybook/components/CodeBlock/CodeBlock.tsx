import React, { FunctionComponent, useEffect, useState, ReactElement, useRef } from 'react'
import { stripIndent } from 'common-tags'
import prism from 'prismjs'

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
        <div className="code-block">

            {render && lang === 'html' && renderHTML(children)}

            {render && lang === 'css' && renderCSS(children)}

            {/* {render && lang === 'less' && renderLESS(children)} */}

            <div onDoubleClick={triggerCopy}>
                <span className="code-block__label">{lang}</span>
                <pre className="code-block__pre">
                    <code
                        className="code-block__source"
                        dangerouslySetInnerHTML={{ __html: source }}
                        ref={inputEl}
                        spellCheck={false}
                    ></code>
                </pre>
            </div>

            <style jsx>{`
                .code-block::after {
                    content: "${copyStatus === -1 ? '💩' : copyStatus === 1 ? '👍' : '2x🖱'}";
                    opacity: ${copyStatus === 0 ? 0 : 1};
                }
            `}</style>

            <style jsx global>{`
                .code-block {
                    background-color: #333;
                    border-radius: 1rem;
                    color: white;
                    display: inline-flex;
                    flex-direction: column;
                    font-size: 14px;
                    padding: 1.5rem;
                    position: relative;
                    width: 100%;
                }

                .code-block__pre {
                    overflow-x: auto;
                }

                .code-block__source {
                    line-height: 1.5;
                }

                .code-block::after {
                    position: absolute;
                    right: 10px;
                    text-shadow: 1px 1px 0 #000;
                    top: 10px;
                    color: #fff;
                    font-size: 2rem;
                }

                .code-block:hover::after {
                    opacity: 1;
                }


                .code-block__label {
                    font-size: 12px;
                    margin-bottom: 10px;
                    margin-top: -5px;
                    text-transform: uppercase;
                    color: #bbb;
                }

                /** PrimsJS Styling */

                :not(pre)>code[class*="language-"] {
                    padding: 1px;
                    border-radius: 3px;
                }

                .token.comment,
                .token.prolog,
                .token.doctype,
                .token.cdata {
                    color: #7C7C7C;
                }

                .token.punctuation {
                    color: #c5c8c6;
                }

                .namespace {
                    opacity: .7;
                }

                .token.property,
                .token.keyword,
                .token.tag {
                    color: #96CBFE;
                }

                .token.class-name {
                    color: #FFFFB6;
                    text-decoration: underline;
                }

                .token.boolean,
                .token.constant {
                    color: #99CC99;
                }

                .token.symbol,
                .token.deleted {
                    color: #f92672;
                }

                .token.number {
                    color: #FF73FD;
                }

                .token.selector,
                .token.attr-name,
                .token.string,
                .token.char,
                .token.builtin,
                .token.inserted {
                    color: #A8FF60;
                }

                .token.variable {
                    color: #C6C5FE;
                }

                .token.operator {
                    color: #EDEDED;
                }

                .token.entity {
                    color: #FFFFB6;
                    /* text-decoration: underline; */
                }

                .token.url {
                    color: #96CBFE;
                }

                .language-css .token.string,
                .style .token.string {
                    color: #87C38A;
                }

                .token.atrule,
                .token.attr-value {
                    color: #F9EE98;
                }

                .token.function {
                    color: #DAD085;
                }

                .token.regex {
                    color: #E9C062;
                }

                .token.important {
                    color: #fd971f;
                }

                .token.important,
                .token.bold {
                    font-weight: bold;
                }

                .token.italic {
                    font-style: italic;
                }

                .token.entity {
                    cursor: help;
                }

            `}</style>

        </div>
    )
}
