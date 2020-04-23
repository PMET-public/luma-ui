import React, { useState, useEffect, useCallback } from 'react'
import { Component } from '../../lib'
import { Root, Actions, Plus, Minus, Value } from './Quantity.styled'

import { useThrottle } from '../../hooks/useThrottle'

import PlusIconSvg from 'remixicon/icons/System/add-line.svg'
import MinusIconSvg from 'remixicon/icons/System/subtract-line.svg'
import RemoveIconSvg from 'remixicon/icons/System/delete-bin-2-line.svg'

export type QuantityProps = {
    value?: number
    maxValue?: number
    minValue?: number
    addLabel?: string
    removeLabel?: string
    substractLabel?: string
    delay?: number
    onUpdate?: (value: number) => any
    onRemove?: () => any
}

export const Quantity: Component<QuantityProps> = ({
    value: inputValue = 1,
    maxValue,
    minValue = 1,
    addLabel,
    removeLabel,
    substractLabel,
    delay = 250,
    onUpdate: _onUpdate,
    onRemove: _onRemove,
    ...props
}) => {
    const [value, setValue] = useState(inputValue)
    const [loaded, setLoaded] = useState(false)

    const onUpdate = useThrottle(() => {
        if (!loaded) return

        if (value < minValue && typeof _onRemove === 'function') {
            _onRemove()
        } else if (typeof _onUpdate === 'function') {
            _onUpdate(value)
        }
    }, delay)

    useEffect(onUpdate, [value])

    useEffect(() => setLoaded(true), [])

    const handleSubstract = useCallback(() => {
        setValue(value - 1)
    }, [value, setValue])

    const handleAdd = useCallback(() => {
        setValue(value + 1)
    }, [value, setValue])

    return (
        <Root {...props}>
            <Value>
                <sub>x</sub> {value}
            </Value>
            {_onUpdate && (
                <Actions>
                    <Minus disabled={value < minValue} type="button" onClick={handleSubstract}>
                        {_onRemove && value <= minValue ? <RemoveIconSvg aria-label={substractLabel} /> : <MinusIconSvg aria-label={removeLabel} />}
                    </Minus>
                    <Plus disabled={value === maxValue} onClick={handleAdd}>
                        <PlusIconSvg aria-label={addLabel} />
                    </Plus>
                </Actions>
            )}
        </Root>
    )
}
