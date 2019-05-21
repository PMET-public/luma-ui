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

        <Button className="flash-message__cta" onClick={onClose}>Close</Button>
    </div>
)
