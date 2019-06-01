const source = require('common-tags').source

module.exports = (Name, filename) => source`

    import React, { FunctionComponent } from 'react'

    export type ${Name}Props = { }

    export const ${Name}: FunctionComponent<${Name}Props> = ({ }) => (
        <div className="${filename}">👋 Hi, I'm ${Name}</div>
    )

` + '\n'
