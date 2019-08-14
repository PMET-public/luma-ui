const source = require('common-tags').source

module.exports = (Name, folder = 'components') => {

    labels = {
        components: '📦 Components',
        pages: '📑 Pages',
    }
    
    return source`

        import React from 'react'
        import ${Name} from './'
        import { storiesOf } from '@storybook/react'

        storiesOf('${labels[folder]}/${Name}', module)
            .add('Default', () => (
                <div className="story">
                    <${Name} />

                    <style jsx global>{\`
                        .story {
                            align-items: center;
                            display: flex;
                            height: 100vh;
                            justify-content: center;
                            width: 100%;
                        }
                    \`}</style>
                </div>
            ))

    ` + '\n'
}
