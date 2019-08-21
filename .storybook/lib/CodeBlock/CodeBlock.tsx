import React, { FunctionComponent, useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { stripIndent } from 'common-tags'
import prism from 'prismjs'
import './prism.css'

import 'prismjs/components/prism-less'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-graphql'
import 'prismjs/components/prism-bash'

export type CodeBlockProps = {
    lang: 'tsx' | 'jsx' | 'graphql' | 'bash' | 'html' | 'css' | 'less' | 'js' | 'typescript'
    render?: undefined
    children: string
}

const Root = styled.div<{ status: number }>`
    background-color: #333;
    border-radius: 1rem;
    color: white;
    display: inline-flex;
    flex-direction: column;
    font-family: 'Fira Code', 'Courier New', Courier, monospace;
    font-size: 1.4rem;
    font-size: 14px;
    padding: 15px;
    position: relative;
    width: 100%;

    &::after {
        color: #fff;
        font-size: 2rem;
        opacity: ${({ status }) => (status === 0 ? '0' : '1')};
        position: absolute;
        right: 10px;
        text-shadow: 1px 1px 0 #000;
        top: 10px;

        content: "${({ status }) => {
            switch (status) {
                case -1:
                    return '💩'
                case 1:
                    return '👍'
                default:
                    return '2x🖱'
            }
        }}";
    }

    &:hover::after {
        opacity: 1;
    }
`

const Pre = styled.div`
    overflow-x: auto;
`

const Source = styled.div`
    line-height: 1.5;
`

const Label = styled.div`
    font-size: 12px;
    margin-bottom: 10px;
    margin-top: -5px;
    text-transform: uppercase;
    color: #bbb;
`

export const CodeBlock: FunctionComponent<CodeBlockProps> = ({ children, lang, render = false }) => {
    const [source, setSource] = useState('')
    const [status, setStatus] = useState(0)
    const inputEl: any = useRef()

    useEffect(() => {
        const highlightedSource = stripIndent(prism.highlight(children, prism.languages[lang], lang))

        setSource(highlightedSource)

        if (render && lang === 'js') {
            // tslint:disable-next-line: no-eval
            eval(children)
        }
    }, [children, source, render])

    useEffect(() => {
        if (status === 0) return
        const timer = setTimeout(() => {
            setStatus(0)
        }, 1500)

        return () => {
            clearTimeout(timer)
        }
    }, [status])

    const triggerCopy = () => {
        try {
            const selection: any = window.getSelection()
            const range = document.createRange()
            range.selectNodeContents(inputEl.current)
            selection.removeAllRanges()
            selection.addRange(range)
            document.execCommand('copy')

            setStatus(1)
        } catch (err) {
            setStatus(-1)
        }
    }

    return (
        <Root status={status}>
            <div onDoubleClick={triggerCopy}>
                <Label>{lang}</Label>
                <Pre>
                    <Source dangerouslySetInnerHTML={{ __html: source }} ref={inputEl} spellCheck={false}></Source>
                </Pre>
            </div>
        </Root>
    )
}
