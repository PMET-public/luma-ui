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
                        align-items: center;
                        display: flex;
                        height: 100vh;
                        justify-content: center;
                        width: 100vw;
                    }
                \`}</style>
            </div>
        )
    }

` + '\n'
