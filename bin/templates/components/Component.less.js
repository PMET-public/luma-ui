const source = require('common-tags').source

module.exports = (name) => source`

    .${name} {
        align-items: center;
        background-color: #fff;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        padding: 2rem 3rem;
        box-shadow: 0 0 1rem #ccc;
    }

` + '\n'
