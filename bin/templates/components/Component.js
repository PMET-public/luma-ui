const source = require('common-tags').source

module.exports = Name =>
    source`

    import React from 'react'
    import { Component } from '../../lib'
    import { Root } from './${Name}.styled'

    export type ${Name}Props = {}

    export const ${Name}: Component<${Name}Props> = ({ ...props }) => {
        return <Root {...props}>👋 Hi, I'm ${Name}</Root>
    }

` + '\n'
