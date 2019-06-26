import React from 'react'
import CodeBlock from '.'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'

storiesOf('🏗 Utilities/CodeBlock', module)
    .add('tsx', () => (
        <CodeBlock lang="tsx">{`
            import React, { Fragment, FunctionComponent } from 'react'

            export type FooProps = { }
            
            export const Foo: FunctionComponent<FooProps> = ({ }) => (
                <Fragment>
                    <div className="foo">👋 Hi, I'm Foo</div>
                </Fragment>
            )
        `}</CodeBlock>
    ))
