const source = require('common-tags').source

module.exports = (Name) => source`

    import React from 'react'
    import { Component } from '../../lib'
    import { Root } from './FooBar.styled'

    export type FooBarProps = {}

    export const FooBar: Component<FooBarProps> = ({ ...props }) => {
        return <Root {...props}>👋 Hi, I'm FooBar</Root>
    }

` + '\n'
