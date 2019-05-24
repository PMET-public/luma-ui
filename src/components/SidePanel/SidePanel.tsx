import React, { Fragment, FunctionComponent } from 'react'
import { getbem } from '../../lib/helpers'

export type SidePanelProps = {
    position?: 'left' | 'right',
    isOpen?: boolean,
    onClickClose: () => void,
}

export const SidePanel: FunctionComponent<SidePanelProps> = ({
    children,
    onClickClose,
    position = 'left',
    isOpen = true,
}) => {
    return (
        <Fragment>
            <button
                aria-hidden={true}
                tabIndex={-1}
                className={getbem('side-panel-screen', ['open', isOpen])}
                type="button"
                onClick={onClickClose}
            />

            <div className={getbem('side-panel', position, ['open', isOpen])}>
                {children}
            </div>
        </Fragment>

    )
}
