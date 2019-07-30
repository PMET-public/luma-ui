import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'

export type TextSwatchesProps = Props<{
    items: Array<Props<{
        text: string
        active?: boolean
    }>>
}>

export const TextSwatches: Component<TextSwatchesProps> = ({
    items = [],
    ...props
}) => {
    const { colors} = useTheme()

    return (
        <Element {...props} className={classes('text-swatches', props.className)}>
            {items.map(({ active = false, text, className, ...item }, index) => (
                <Element 
                    as="button" 
                    {...item}
                    className={classes('text-swatches__item', className, ['--active', active], ['--disabled', !!item.disabled])}
                    key={index}
                >
                    <span className="text-swatches__item__label">
                        {text}
                    </span>
                </Element>
            ))}

            <style jsx global>{`
                .text-swatches {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 1rem;
                }

                .text-swatches__item {
                    border-radius: 0.5rem;
                    border: 0.1rem solid ${colors.primary};
                    color: ${colors.primary};
                    background-color: ${colors.onPrimary};
                    padding: 1rem;
                    text-align: center;
                    transition: all 305ms ease;

                    &.--active {
                        background-color: ${colors.primary};
                        color: ${colors.onPrimary};
                        font-weight: 600;
                    }

                    &.--disabled {
                        filter: opacity(30%);
                    }

                    &:hover:not(.--active):not(.--disabled) {
                        border-color: inherit;
                        color: ${colors.primary.fade(0.5)};
                    }
                }
            `}</style>
        </Element>
    )
}
