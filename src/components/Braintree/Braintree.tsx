import React, { useRef, useEffect } from 'react'
import { Component } from '../../lib'
import { Root } from './Braintree.styled'
import BraintreeWebDropIn, { Dropin, Options } from 'braintree-web-drop-in'

export type BraintreeDropin = Dropin

export type BraintreeProps = {
    options: Omit<Options, 'container'>
    onLoad: (instance: BraintreeDropin) => any
}

export const Braintree: Component<BraintreeProps> = ({ options, onLoad, ...props }) => {
    const instance = useRef<BraintreeDropin>()
    // const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        ;(async function() {
            instance.current = await BraintreeWebDropIn.create({
                ...options,
                container: '[data-braintree-dropin]',
            })

            onLoad(instance.current)
        })().catch(error => {
            instance.current = undefined
            console.error(error)
        })

        return () => {
            if (instance.current) instance.current.teardown()
        }
    }, [JSON.stringify(options)])

    return <Root data-braintree-dropin {...props} />
}
