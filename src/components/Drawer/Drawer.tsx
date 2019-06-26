import React, { FunctionComponent } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { useTransition, animated } from 'react-spring'

export type DrawerProps = {
    position?: 'left' | 'right'
    isOpen?: boolean
    onClose?: (...args: any) => any
}

export const Drawer: FunctionComponent<DrawerProps> = ({
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
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    return (
        <div className="drawer">
            {slideTransitions.map(slideTransition => slideTransition.item && (
                <animated.div className="drawer__content" key={slideTransition.key} style={slideTransition.props}>
                    {children}
                </animated.div>
            ))}
    
            {onClose && fadeTransitions.map(fadeTransition => (
                <animated.button key={fadeTransition.key} style={fadeTransition.props} className="drawer__close-button"
                    arial-label="close"
                    onClick={onClose}
                ></animated.button>
            ))}

            <style jsx>{`
                .drawer :global(.drawer__content) {
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

                .drawer :global(.drawer__close-button) {
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
    )
}
