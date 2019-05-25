import React, { Fragment, FunctionComponent } from 'react'

export type FooBarProps = { }

export const FooBar: FunctionComponent<FooBarProps> = ({ }) => (
    <Fragment>
        <div className="foo-bar">👋 Hi, I'm FooBar</div>
    </Fragment>
)
