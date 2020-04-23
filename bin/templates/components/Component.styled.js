const source = require('common-tags').source

module.exports = () =>
    source`
    import styled from 'styled-components'

    export const Root = styled.div\`
        padding: 2rem;
    \`
` + '\n'
