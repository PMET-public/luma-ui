import React, { useState, useCallback } from 'react'
import { Component } from '../../lib'
import { Root, Actions, Plus, Minus, Value } from './Quantity.styled'

import PlusIconSvg from 'remixicon/icons/System/add-line.svg'
import MinusIconSvg from 'remixicon/icons/System/subtract-line.svg'
import RemoveIconSvg from 'remixicon/icons/System/delete-bin-2-line.svg'

export type QuantityProps = {
    addLabel?: string
    value?: number
    maxValue?: number
    minValue?: number
    removeLabel?: string
    substractLabel?: string
    onUpdate?: (value: number) => any
    onRemove?: () => any
}

export const Quantity: Component<QuantityProps> = ({
    addLabel,
    value: defaultValue = 1,
    maxValue,
    minValue = 1,
    removeLabel,
    substractLabel,
    onUpdate,
    onRemove,
    ...props
}) => {
    const [value, setValue] = useState(defaultValue)

    const handleUpdate = useCallback((newValue: number) => {
        setValue(newValue)

        if (newValue < minValue && typeof onRemove === 'function') {
            onRemove()
        } else if (typeof onUpdate === 'function') {
            onUpdate(newValue)
        }
    }, [])

    return (
        <Root {...props}>
            <Value>
                <sub>x</sub> {value}
            </Value>
            <Actions>
                <Minus disabled={value < minValue} type="button" onClick={() => handleUpdate(value - 1)}>
                    {onRemove && value <= minValue ? (
                        <RemoveIconSvg aria-label={substractLabel} />
                    ) : (
                        <MinusIconSvg aria-label={removeLabel} />
                    )}
                </Minus>
                <Plus disabled={value === maxValue} onClick={() => handleUpdate(value + 1)}>
                    <PlusIconSvg aria-label={addLabel} />
                </Plus>
            </Actions>
        </Root>
    )
}
