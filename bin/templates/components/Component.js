const source = require('common-tags').source
const path = require ('path')

module.exports = (Name, filename) => source`

    import React from 'react'
    import { Component, classes } from '../../lib'
    
    export type ${Name}Props = {

    }

    export const ${Name}: Component<${Name}Props> = ({ 
        as: ${Name} = 'div', 
        ...props
    }) => {
        
        return (
            <${Name} {...props} className={classes('${filename}', props.className)}>
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
            </${Name}>
        )
    }

` + '\n'
