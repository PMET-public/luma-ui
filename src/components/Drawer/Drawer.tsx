import React from 'react'
import { useTheme } from '../../theme'
import { useTransition, animated } from 'react-spring'
import { Component, classes } from '../../lib'

export type DrawerProps = {
    position?: 'left' | 'right'
    isOpen?: boolean
    onClose?: (...args: any) => any
}

export const Drawer: Component<DrawerProps> = ({
    as: Drawer = 'div',
    children,
    isOpen = false,
    position = 'left',
    onClose,
    ...props
}) => {
    const { colors } = useTheme()

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
        <Drawer {...props} className={classes('drawer', props.className)}>
            {slideTransitions.map(slideTransition => slideTransition.item && (
                <animated.div className={classes('drawer__content', ['--left', position === 'left'], ['--right', position === 'right'])} 
                    key={slideTransition.key} 
                    style={slideTransition.props}
                >
                    {children}
                </animated.div>
            ))}

            {onClose && fadeTransitions.map(fadeTransition => fadeTransition.item && (
                <animated.button className="drawer__close-button"
                    key={fadeTransition.key} 
                    style={fadeTransition.props} 
                    onClick={onClose}
                >
                    <span className="visuallyhidden">
                        Close
                    </span>
                </animated.button>
            ))}

            <style jsx global>{`
                .drawer__content {
                    background-color: ${colors.surface};
                    bottom: 0;
                    color: ${colors.onSurface};
                    max-width: 60rem;
                    padding: 2rem;
                    position: fixed;
                    top: 0;
                    width: calc(100% - 3rem);
                    z-index: 3;

                    &.--left {
                        box-shadow: 0.1rem 0 0.5rem rgba(0, 0, 0, 0.15);
                        left: 0;
                    }

                    &.--right {
                        box-shadow: -0.1rem 0 0.5rem rgba(0, 0, 0, 0.15);
                        right: 0;
                    }
                }

                .drawer__close-button {
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
        </Drawer>
    )
}
