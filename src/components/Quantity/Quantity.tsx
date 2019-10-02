import React, { useState } from 'react'
import { Component } from '../../lib'
import { Root, Plus, Minus, Value } from './Quantity.styled'

import PlusIconSvg from 'remixicon/icons/System/add-line.svg'
import MinusIconSvg from 'remixicon/icons/System/subtract-line.svg'

export type QuantityProps = {
    defaultValue?: number
    minValue?: number
    maxValue?: number
}

export const Quantity: Component<QuantityProps> = ({ defaultValue = 0, minValue = 0, maxValue, ...props }) => {
    const [value, setValue] = useState(defaultValue)

    return (
        <Root {...props}>
            <Minus disabled={value === minValue} type="button" onClick={() => setValue(value - 1)}>
                <MinusIconSvg />
            </Minus>
            <Value>{value}</Value>
            <Plus disabled={value === maxValue} onClick={() => setValue(value + 1)}>
                <PlusIconSvg />
            </Plus>
        </Root>
    )
}
