const source = require('common-tags').source

module.exports = (Name, filename) => source`

    import React from 'react'
    import { Component, Props, Element, classes } from '../../lib'
    
    export type ${Name}Props = Props<{ }>

    export const ${Name}: Component<${Name}Props> = ({ 
        ...props
    }) => {
        
        return (
            <Element {...props} className={classes('${filename}', props.className)}>
                👋 Hi, I'm ${Name}

                <style>{\`
                    .${filename} {
                        
                    }
                \`}</style>
            </Element>
        )
    }

` + '\n'
