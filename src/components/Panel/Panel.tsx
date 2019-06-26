import React, { FunctionComponent } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { useTransition , animated } from 'react-spring'

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

    const slideTransitions = useTransition(isOpen, null, {
        from: { opacity: 0, transform: `translateX(${position === 'left' ? '-105%' : '105%'}` },
        enter: { opacity: 1, transform: 'translateX(0)' },
        leave: { opacity: 0, transform: `translateX(${position === 'left' ? '-105%' : '105%'}` },
    })

    const fadeTransitions = useTransition(isOpen, null, {
        from: { opacity: 0 },
        enter: {  opacity: 1 },
        leave: { opacity: 0 },
    })

    return <React.Fragment>
        {slideTransitions.map(({ item, key, props }) => item && (
            <div className="panel">
                <animated.div className="panel__content" key={key} style={props}>
                    {children}
                </animated.div>

                {onClose ? fadeTransitions.map(({ item, key, props }) => item && (
                    <animated.button key={key} style={props}className="panel__close-button"
                        arial-label="close"
                        onClick={onClose}
                    ></animated.button>
                )) : null}

                <style jsx>{`
                    .panel :global(.panel__content) {
                        background-color: ${colors.surface};
                        bottom: 0;
                        color: ${colors.onSurface};
                        max-width: 60rem;
                        padding: ${padding};
                        position: fixed;
                        top: 0;
                        width: calc(100% - 3rem);
                        z-index: 3;

                        ${position === 'left' ? `
                            box-shadow: 0.1rem 0 0.5rem rgba(0, 0, 0, 0.15);
                            left: 0;
                        ` : `
                            box-shadow: -0.1rem 0 0.5rem rgba(0, 0, 0, 0.15);
                            right: 0;
                        `}
                    }

                    .panel :global(.panel__close-button) {
                        background: rgba(0, 0, 0, 0.25);
                        border: 0;
                        height: 100%;
                        left: 0;
                        position: fixed;
                        top: 0;
                        width: 100%;
                        z-index: 1;
                    }
                `}</style>
            </div>
        ))}
    </React.Fragment> 
}
