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

            <style jsx>{`
                .side-panel {
                    background: var(--color-white, #fff);
                    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, .25);
                    display: flex;
                    height: 100%;
                    height: 100%;
                    max-width: 20rem;
                    padding: 1em;
                    position: fixed;
                    top: 0;
                    transition-duration: 192ms;
                    transition-property: opacity, transform, visibility;
                    transition-timing-function: cubic-bezier(.4, 0, 1, 1);
                    visibility: hidden;
                    width: 100%;
                    z-index: 1;
                }

                .side-panel--left {
                    left: 0;
                    transform: translateX(-100%);
                }

                .side-panel--right {
                    right: 0;
                    transform: translateX(100%);
                }

                .side-panel--open {
                    transform: translateX(0);
                    transition-duration: 224ms;
                    transition-timing-function: cubic-bezier(0, 0, .2, 1);
                    visibility: visible;
                }

                .side-panel-screen {
                    background: var(--color-black, black);
                    height: 100%;
                    left: 0;
                    opacity: 0;
                    position: fixed;
                    top: 0;
                    transition-duration: 224ms;
                    transition-property: opacity visibility;
                    transition-timing-function: cubic-bezier(0, 0, .2, 1);
                    visibility: hidden;
                    width: 100%;
                    border: 0;
                    z-index: 1;
                }

                .side-panel-screen--open {
                    opacity: .75;
                    visibility: visible;
                }
            `}</style>
        </Fragment>

    )
}
