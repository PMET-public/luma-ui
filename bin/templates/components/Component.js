const source = require('common-tags').source

module.exports = (Name, filename) => source`

    import React, { FunctionComponent } from 'react'

    export type ${Name}Props = { }

    export const ${Name}: FunctionComponent<${Name}Props> = ({ }) => {
        return (
            <div className="${filename}">
                👋 Hi, I'm ${Name}

                <style jsx>{\`
                    .${filename} {
                        padding: 2rem;
                        background: white;
                        border-radius: 1rem;
                        box-shadow: 0 0 1rem #ccc;
                    }
                \`}</style>
            </div>
        )
    }

` + '\n'
