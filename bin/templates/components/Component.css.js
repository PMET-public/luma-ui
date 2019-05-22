const source = require('common-tags').source

module.exports = (name) => source`

    .${name} {
        align-items: center;
        background-color: #fff;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        padding: 1rem 2rem;
    }

`
