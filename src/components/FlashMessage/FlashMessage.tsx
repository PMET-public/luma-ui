import React, { FunctionComponent } from 'react'
import { getClassNamesWithModifier } from '../../lib/helpers'
import { Button } from '../../components/Button'

export type FlashMessageProps = {
    message: string
    type: 'error' | 'info' | 'warning'
    onClose?: () => void
}

export const FlashMessage: FunctionComponent<FlashMessageProps> = ({ message, type, onClose = () => {} }) => (
    <div className={getClassNamesWithModifier('flash-message', type)}>
        {message}

        <Button onClick={onClose}>Close</Button>

        <style jsx>{`
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
        `}</style>
    </div>
)