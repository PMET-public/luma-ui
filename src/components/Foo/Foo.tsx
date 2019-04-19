import React, { Fragment, FunctionComponent } from 'react'

type FooProps = { }

export const Foo: FunctionComponent<FooProps> = ({ }) => (
    <Fragment>
        <div className="-foo">👋 Hi, I'm Foo</div>

        <style jsx>{`
            .-foo {
                font-weight: bold;
            }
        `}</style>
    </Fragment>
)