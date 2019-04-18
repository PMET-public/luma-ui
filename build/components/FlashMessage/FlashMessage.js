import React from 'react';
import { getClassNamesWithModifier } from 'src/lib/helpers';
import Button from 'src/components/Button';
export const FlashMessage = ({ message, type, onClose = () => { } }) => (React.createElement("div", { className: getClassNamesWithModifier('flash-message', type) },
    message,
    React.createElement(Button, { onClick: onClose }, "Close"),
    React.createElement("style", { jsx: true }, `
            .flash-message {
                background-color: var(--color-primary);
                color: var(--color-primary--text);
                font-size: 1.5rem;
                left: 0;
                padding: 1rem;
                position: fixed;
                right: 0;
                top: 0;
            }

            .flash-message--error {
                background-color: var(--color-error, red);
                color: var(--color-error--contrast, white);
            }

            .flash-message--info {
                background-color: var(--color-info, teal);
                color: var(--color-info--contrast, white);
            }

            .flash-message--warning {
                background-color: var(--color-warning, yellow);
                color: var(--color-warning--contrast, black);
            }
        `)));
//# sourceMappingURL=FlashMessage.js.map