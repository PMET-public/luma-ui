const source = require('common-tags').source

module.exports = (Name) => source`

    import React from 'react'
    import { Component, Props, Element } from '../../lib'
    import styles from './${Name}.css'
    
    export type ${Name}Props = Props<{ }>

    export const ${Name}: Component<${Name}Props> = ({ 
        ...props
    }) => {
        
        return (
            <Element className={styles.root} {...props}>
                👋 Hi, I'm ${Name}
            </Element>
        )
    }

` + '\n'
