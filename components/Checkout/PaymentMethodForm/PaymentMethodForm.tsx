import React, { useEffect, useCallback, useRef, useReducer, Reducer } from 'react'
import { Component } from '../../../lib'
import { Root, Card, CardIcon, CardType, CardNumber } from './PaymentMethodForm.styled'
import BraintreeWebDropIn, { Dropin, Options, PaymentMethodPayload as Payload } from 'braintree-web-drop-in'
import Button, { ButtonProps } from '../../Button'
import Form, { FormProps, FormError } from '../../Form'
import { useTheme } from '../../../theme/useTheme'

export type Braintree = Dropin

export type PaymentMethodPayload = Payload

export type PaymentMethodFormProps = FormProps<PaymentMethodPayload> & {
    submitting?: boolean
    error?: string
    submitButton: ButtonProps
    editButton: ButtonProps
    braintree: Omit<Options, 'container'>
    onSubmit: (payload: PaymentMethodPayload) => any
}

type ReducerState = {
    instance: Braintree | null
    loading: boolean
    formError?: string | null
    editable: boolean
    paymentInfo?: Payload
}

type ReducerActions =
    | {
          type: 'setInstance'
          payload: Braintree
      }
    | {
          type: 'unsetInstance'
      }
    | {
          type: 'setLoader'
          payload: boolean
      }
    | {
          type: 'setEditable'
      }
    | {
          type: 'unsetEditable'
      }
    | {
          type: 'setFormError'
          payload: string
      }
    | {
          type: 'unsetFormError'
      }
    | {
          type: 'setPaymentInfo'
          payload: Payload
      }

const initialState: ReducerState = {
    instance: null,
    loading: false,
    formError: null,
    editable: true,
    paymentInfo: undefined,
}

const reducer: Reducer<ReducerState, ReducerActions> = (state, action) => {
    switch (action.type) {
        case 'setInstance':
            return {
                ...state,
                instance: action.payload,
            }
        case 'unsetInstance':
            return {
                ...state,
                instance: null,
            }
        case 'setLoader':
            return {
                ...state,
                loading: action.payload,
            }
        case 'setEditable':
            return {
                ...state,
                editable: true,
            }

        case 'setFormError':
            return {
                ...state,
                formError: action.payload,
            }
        case 'unsetFormError':
            return {
                ...state,
                formError: null,
            }
        case 'setPaymentInfo':
            return {
                ...state,
                paymentInfo: action.payload,
                editable: false,
                instance: null,
            }

        default:
            throw `Reducer action: ${action.type} not valid.`
    }
}

export const PaymentMethodForm: Component<PaymentMethodFormProps> = ({ submitting, error, braintree, submitButton, editButton, onSubmit, ...props }) => {
    const { colors } = useTheme()

    const containerElem = useRef(null)

    const [{ instance, editable, loading, formError, paymentInfo }, dispatch] = useReducer(reducer, initialState)

    const createBraintreeInstance = useCallback(async () => {
        if (!containerElem) return

        try {
            const payload = await BraintreeWebDropIn.create({
                container: '[data-braintree-dropin]',
                card: {
                    overrides: {
                        fields: {
                            number: {
                                maskInput: {
                                    showLastFour: true, // Only show last four digits on blur.
                                },
                            },
                        },
                        styles: {
                            input: {
                                color: colors.onSurface,
                            },
                            ':focus': {
                                color: colors.onSurface,
                            },
                        },
                    },
                },
                ...braintree,
            })

            dispatch({ type: 'setInstance', payload })
        } catch (error) {
            dispatch({ type: 'unsetInstance' })
            console.error(error)
        }
    }, [containerElem, JSON.stringify(braintree)])

    useEffect(() => {
        if (editable && !instance) createBraintreeInstance()

        return () => {
            if (instance) instance.teardown()
        }
    }, [instance])

    const handleOnEdit = useCallback(
        async (e: Event) => {
            e.preventDefault()
            createBraintreeInstance()
            dispatch({ type: 'setEditable' })
        },
        [createBraintreeInstance]
    )

    const handleOnSubmit = useCallback(
        async form => {
            dispatch({ type: 'setLoader', payload: true })
            dispatch({ type: 'unsetFormError' })

            async function _submit() {
                if (!instance) return
                const payload = await instance.requestPaymentMethod()
                dispatch({ type: 'setPaymentInfo', payload })
                await onSubmit(payload)
            }

            try {
                await _submit()
            } catch (error) {
                dispatch({ type: 'setFormError', payload: error.message })
            }

            dispatch({ type: 'setLoader', payload: false })
        },
        [onSubmit, instance]
    )

    return (
        <Root as={Form} onSubmit={handleOnSubmit}>
            {editable ? (
                <div ref={containerElem} data-braintree-dropin {...props} />
            ) : (
                paymentInfo &&
                paymentInfo.type === 'CreditCard' && (
                    <Card>
                        <CardIcon />
                        <CardType>{(paymentInfo.details as any).cardType}</CardType>
                        <CardNumber>Ending in {(paymentInfo.details as any).lastFour}</CardNumber>
                    </Card>
                )
            )}

            {(error || formError) && <FormError>{error || formError}</FormError>}

            {submitting || loading || editable ? <Button type="submit" loading={submitting || loading} {...submitButton} /> : <Button outline onClick={handleOnEdit} {...editButton} />}
        </Root>
    )
}
