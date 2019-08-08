import React from 'react'
import { Component, Props, Element, classes } from '../../lib'

import { useTheme } from '../../theme'

export type PillItemProps = Props<{ 
    count?: string | number
    text: string
}>

export type PillsProps = Props<{
    items: Array<{
        _id: string | number
    } & PillItemProps>
}>

type CompoundComponent = {
    Item: Component<PillItemProps>
}

export const Pills: Component<PillsProps> & CompoundComponent = ({ 
    items,
    ...props
}) => {
    
    return (
        <Element {...props} className={classes('pills', props.className)}>
            <div className="pills__wrapper">
                {items.map(({ _id, ...item }, index) => (
                    <Pills.Item key={_id || index } {...item} />
                ))}
            </div>

            <style jsx global>{`
                .pills {
                    overflow-y: hidden;
                }

                .pills__wrapper {
                    -webkit-overflow-scrolling: touch;
                    display: grid;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-gap: 1rem;
                    overflow-x: scroll;

                    padding: 0 0 1rem;
                    margin-bottom: -1rem;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            `}</style>
        </Element>
    )
}

Pills.Item = ({
    count,
    text,
    ...props
}) => {
    const { colors } = useTheme()
    return (
        <Element {...props} className={classes('pill-item', props.className)}>
            <span className="pill-item__wrapper">
                { text }
                {count && (
                    <span className="pill-item__count">
                        {count}
                    </span>
                )}
            </span>

            <style jsx global>{`
                .pill-item {
                    background-color: ${colors.surface};
                    border-radius: 1rem;
                    border: 0.1rem solid ${colors.onSurface.fade(0.9)};
                    color: ${colors.onSurface};
                    font-weight: 600;
                    padding: 1rem 1.4rem;
                    transition: border 0.5s ease-out;

                    &:not([disabled]):hover {
                        border-color: ${colors.onSurface};
                    }
                }
                .pill-item__wrapper {
                    align-items: center;
                    display: grid;
                    grid-auto-flow: column;
                    grid-auto-columns: max-content;
                    grid-gap: 1rem;
                }

                .pill-item__count {
                    color: ${colors.onSurface.fade(0.5)};
                    font-size: 0.9em;
                    font-weight: 400;
                }
            `}</style>
        </Element>
    )
}
