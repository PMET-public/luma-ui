const source = require('common-tags').source

module.exports = (name) => source`

    .${name} {
        align-items: center;
        background-color: var(--color-surface);
        border-radius: 1rem;
        box-shadow: 0 0 1rem #ccc;
        color: var(--color-on-surface);
        display: flex;
        justify-content: center;
        padding: 2rem 3rem;
    }

` + '\n'
