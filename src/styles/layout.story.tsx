import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../utilities/CodeBlock'
import centered from '@storybook/addon-centered/react'

storiesOf('💅 Styles/📐 Layout', module)
    .addDecorator(centered)
    .add('Variables', () => (
        <CodeBlock lang="css">{`
            :root {
                --grid-width: 960;
                --grid-column-width: 60;
                --grid-columns: 12;
            }
        `}</CodeBlock>
    ))
    .add('Breakpoints', () => (
        <Fragment>
            <div className="global-layout-breakpoints grid container">
                <CodeBlock lang="sass">{`
                    @include breakpoint('xsmall') {

                    }
                `}</CodeBlock>

                <CodeBlock lang="sass">{`
                    @include breakpoint('small') {

                    }
                `}</CodeBlock>

                <CodeBlock lang="sass">{`
                    @include breakpoint('medium') {

                    }
                `}</CodeBlock>

                <CodeBlock lang="sass">{`
                    @include breakpoint('large') {

                    }
                `}</CodeBlock>

                <CodeBlock lang="sass">{`
                    @include breakpoint('xlarge') {

                    }
                `}</CodeBlock>

                <style>{`
                    .global-layout-breakpoints {
                        --gap: 4rem;
                    }
                    
                    @media (min-width: 768px) {
                        .global-layout-breakpoints {
                            --gap: 8rem;
                            --columns: 2;
                        }
                    }

                    @media (min-width: 1224px) {
                        .global-layout-breakpoints {
                            --columns: 3;
                        }
                    }
                `}</style>
            </div>
        </Fragment>
    ))

storiesOf('💅 Styles/📐 Layout', module)
    .add('Grid', () => (
        <Fragment>
            <div className="container">
                <div className="global-layout-grid__block">
                    <CodeBlock render={true} lang="html">{`
                        <div class="my-html-element grid">
                            <div>Uno</div>
                            <div>Dos</div>
                            <div>Tres</div>
                            <div>Catorce  🎵🎶</div>
                        </div>
                    `}</CodeBlock>
                </div>   

                <div className="global-layout-grid__block">
                    <CodeBlock lang="sass">{`
                        @import "./src/styles/_mixins";

                        .my-html-element {
                            @include breakpoint('medium') {
                                --columns: 2;
                            }

                            @include breakpoint('large') {
                                --columns: 4;
                            }
                        }
                    `}</CodeBlock>
                </div>
            </div>

            <style>{`
                .global-layout-grid__block:first-of-type {
                    margin-top: 8rem;
                }

                .global-layout-grid__block {
                    margin: 3rem 0;
                }

                @media (min-width: 768px) {
                    .my-html-element {
                        --columns: 2;
                    }
                }

                @media (min-width: 992px) {
                    .my-html-element {
                        --columns: 4;
                    }
                }

                .my-html-element {
                    padding: 3rem 0;
                }

                .my-html-element > div {
                    background-color: #fff;
                    box-shadow: 0.1rem 0.1rem 1rem #ccc;
                    padding:2rem;
                    border-radius: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `}</style>
        </Fragment>
    ))
