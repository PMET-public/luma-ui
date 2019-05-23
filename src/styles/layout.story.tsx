import React from 'react'
import { storiesOf } from '@storybook/react'
import CodeBlock from '../utilities/CodeBlock'

storiesOf('💅 Styles', module)
    .add('📐 Layout', () => (

        <div className="container">
            <CodeBlock lang="css">{`
                :root {
                    --grid-width: 960;
                    --grid-column-width: 60;
                    --grid-columns: 12;
                }
            `}</CodeBlock>

            <hr />

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

            <hr />

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

                .my-html-element > div {
                    align-items: center;
                    background-color: #fff;
                    border-radius: 1rem;
                    box-shadow: 0.1rem 0.1rem 1rem #ccc;
                    display: flex;
                    justify-content: center;
                    padding: 2rem;
                }
            `}</style>

        </div>
    ))
