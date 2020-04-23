import React from 'react'
import { Component } from '../../lib'
import { Root, Label, RegularPrice, SpecialPrice } from './Price.styled'
import { PriceSkeleton } from './Price.skeleton'

export type PriceProps = {
    loading?: boolean
    currency?: string
    label?: string
    regular: number
    special?: number
}

export const Price: Component<PriceProps> = ({ loading, currency = 'USD', label, regular, special, ...props }) => {
    return (
        <Root {...props}>
            {loading ? (
                <PriceSkeleton />
            ) : (
                <React.Fragment>
                    {label && <Label>{label}</Label>}

                    <RegularPrice $hasSpecial={!!special}>{regular.toLocaleString('en-US', { style: 'currency', currency })}</RegularPrice>

                    {!!special && <SpecialPrice>{special.toLocaleString('en-US', { style: 'currency', currency })}</SpecialPrice>}
                </React.Fragment>
            )}
        </Root>
    )
}
