import React, { createContext, useState, useContext } from 'react'
import { Component, classes } from '../../lib'
import { useTransition, animated } from 'react-spring'
import { useTheme } from '../../theme'

export type DropdownProps = {}

export type DropdownLabelProps = {}

export type DropdownContentProps = {
    isMenu?: boolean
}

type CompoundComponent = {
    Label: Component<DropdownLabelProps>
    Content: Component<DropdownContentProps>
}

const DropdownContext = createContext(false)

export const Dropdown: Component<DropdownProps> & CompoundComponent = ({ 
    as: Dropdown = 'div',
    children,
    ...props
}) => {
    const [state, setState] = useState(false)

    const triggerUpdate = (value: boolean) => {
        setState(value)
    }

    return (
        <DropdownContext.Provider value={state}>
            <Dropdown {...props} className={classes('dropdown', props.className)}>
                <div className="dropdown"
                    onMouseEnter={() => triggerUpdate(true)}
                    onMouseLeave={() => triggerUpdate(false)}
                >
                    {children}
                </div>

                <style jsx>{`
                    .dropdown {
                        display: inline-flex;
                        flex-direction: column;
                        overflow: visible;
                    }

                    .dropdown :global(.dropdown-label::after) {
                        transform: rotate(${state ? '-135deg' : '45deg'});
                        opacity: ${state ? 0.15 : 1};
                    }
                `}</style>
            </Dropdown>
        </DropdownContext.Provider>
    )
}

Dropdown.Label = ({ 
    as: DropdownLabel = 'div',
    children,
    ...props
}) => (
    <DropdownLabel {...props} className={classes('dropdown-label', props.className)}>
        {children}

        <style jsx>{`
            .dropdown-label {
                display: inline-flex;
                align-items: center;
            }

            .dropdown-label::after {
                border-style: solid;
                border-width: 0 0.1rem 0.1rem 0;
                content: "";
                display: inline-block;
                margin-left: 0.5rem;
                margin-top: -0.4rem;
                padding: 0.3rem;
                transform: rotate(45deg);
                transform-origin: center;
                transition: opacity 350ms ease, transform 250ms ease;
            }
        `}</style>
    </DropdownLabel>
)

Dropdown.Content = ({ 
    as: DropdownContent = 'div',
    children, 
    isMenu = false,
    ...props 
}) => {
    const isOpen = useContext(DropdownContext)
    const { colors, grid } = useTheme()

    const transitions = useTransition(isOpen, null, {
        from: { opacity: 0, transform: 'translateY(-0.5rem)' },
        enter: { opacity: 1, transform: 'translateY(0)' },
        leave: { opacity: 0, transform: 'translateY(-0.5rem)'},
    })

    return  (
        <React.Fragment>
            {children && (
                <DropdownContent {...props} className={classes('dropdown-content', props.className)}>
                    {transitions.map(({ item, key, props }) => item && (
                        <animated.div className="dropdown-content__animated" key={key} style={props}>
                            {children}
                        </animated.div>
                    ))}

                    <style jsx>{`
                        .dropdown-content :global(.dropdown-content__animated) {
                            background-color: ${colors.translucentSurface};
                            color: ${colors.onTranslucentSurface};
                            position: absolute;
                            z-index: 1;
                            padding: 1.3rem 1rem;
                            margin-left: -0.8rem;

                            ${isMenu ? grid({ gap: '1rem'}) : ''}
                        }
                    `}</style>
                </DropdownContent>
            )}
        </React.Fragment>
    )
}
