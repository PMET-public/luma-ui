import React, { Fragment, FunctionComponent } from 'react'
import { getClassNamesWithModifier } from '../../lib/helpers'

type SidePanelProps = {
    position?: 'left' | 'right'
    isOpen?: boolean
    onClickClose: () => void
}

export const SidePanel: FunctionComponent<SidePanelProps> = ({ children, onClickClose, position = 'left', isOpen = true }) => {
    return (
        <Fragment>
            <button 
                aria-hidden={true}
                tabIndex={-1}
                className={getClassNamesWithModifier('side-panel-screen', ['open', isOpen])} 
                type="button"
                onClick={onClickClose}
            ></button>

            <div className={getClassNamesWithModifier('side-panel', position, ['open', isOpen])}>
                {children}
            </div>
        </Fragment>

    )
}
