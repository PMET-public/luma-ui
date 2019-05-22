import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
import CodeBlock from '../utilities/CodeBlock'

storiesOf('💅 Styles/📐 Layout', module)
    .addDecorator(centered)
    .add('Breakpoints', () => (
        <Fragment>
            <div className="global-layout-breakpoints grid container">
                <CodeBlock language="sass">{`
                    @include breakpoint('xsmall') {

                    }
                `}</CodeBlock>

                <CodeBlock language="sass">{`
                    @include breakpoint('small') {

                    }
                `}</CodeBlock>

                <CodeBlock language="sass">{`
                    @include breakpoint('medium') {

                    }
                `}</CodeBlock>

                <CodeBlock language="sass">{`
                    @include breakpoint('large') {

                    }
                `}</CodeBlock>

                <CodeBlock language="sass">{`
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
