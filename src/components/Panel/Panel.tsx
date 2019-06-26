import React, { FunctionComponent, useRef } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { useCSSTransition } from '../../hooks/useCSSTransition'

export type PanelProps = { 
    position?: 'left' | 'right'
    isOpen?: boolean
    onClose?: (...args: any) => any
}

export const Panel: FunctionComponent<PanelProps> = ({ 
    children, 
    isOpen = false,
    position = 'left', 
    onClose,
}) => {
    const { colors, padding } = useTheme()
    const wrapperEl = useRef(null)
    const didTransition = useCSSTransition(wrapperEl, isOpen, 305)

    return didTransition ? (
        <div className="panel" ref={wrapperEl}>
            <div className="panel__content">
                {children}
            </div>

            { onClose ? (
                <button className="panel__close-button" 
                    arial-label="close"
                    onClick={onClose}
                />
            ) : null}

            <style jsx>{`
                .panel__content {
                    background-color: ${colors.surface};
                    bottom: 0;
                    color: ${colors.onSurface};
                    position: fixed;
                    top: 0;
                    width: calc(100% - 3rem);
                    max-width: 60rem;
                    z-index: 3;
                    padding: ${padding};

                    ${position === 'left' ? `
                        box-shadow: 0 0.2rem 3rem rgba(0, 0, 0, 0.15);
                        left: 0;
                    ` : `
                        box-shadow: 0 0.2rem 3rem rgba(0, 0, 0, 0.15);
                        right: 0;
                    `}
                }

                .panel__close-button {
                    background: rgba(0, 0, 0, 0.25);
                    border: 0;
                    height: 100%;
                    left: 0;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 1;
                }

                :global(.panel.css-transition) .panel__content {
                    opacity: 0.5;
                    transform: translateX(${position === 'left' ? '-105%' : '105%'});
                    transition-duration: inherit;
                    transition-property: opacity transform;
                    transition-timing-function: ease-in;
                }

                :global(.panel.css-transition--active) .panel__content {
                    opacity: 1;
                    transform: translateX(0);
                    transition-timing-function: ease-out;
                }

                :global(.panel.css-transition) .panel__close-button {
                    opacity: 0;
                    transition-duration: inherit;
                    transition-property: opacity;
                    transition-timing-function: ease-in;
                }

                :global(.panel.css-transition--active) .panel__close-button {
                    opacity: 1;
                    transition-timing-function: ease-out;
                }
            `}</style>
        </div>
    ) : null
}
