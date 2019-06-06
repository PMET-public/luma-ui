import React, { FunctionComponent } from 'react'

export type FooBarProps = { }

export const FooBar: FunctionComponent<FooBarProps> = ({ }) => (
    <div className="foo-bar">👋 Hi, I'm FooBar</div>
)
