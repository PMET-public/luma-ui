import React, { Fragment } from 'react';
export const Button = ({ children, type = 'button', ...props }) => (React.createElement(Fragment, null,
    React.createElement("button", Object.assign({ className: "button", type: type }, props), children),
    React.createElement("style", { jsx: true }, `
            .button {
                background: var(--color-primary, #ccc);
                border: 0 none;
                border-radius: .4rem;
                padding: 1rem;
                font-size: 1.2rem;
            }
        `)));
//# sourceMappingURL=Button.js.map