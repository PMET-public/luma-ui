const source = require('common-tags').source

module.exports = (Name, filename) => source`

    import React, { Fragment, FunctionComponent } from 'react'

    type ${Name}Props = { }

    export const ${Name}: FunctionComponent<${Name}Props> = ({ }) => (
        <Fragment>
            <div className="${filename}">👋 Hi, I'm ${Name}</div>
        </Fragment>
    )

`
