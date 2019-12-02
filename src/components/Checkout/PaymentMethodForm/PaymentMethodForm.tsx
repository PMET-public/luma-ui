import React, { useEffect, useCallback, useRef, useReducer, Reducer } from 'react'
import { Component } from '../../../lib'
import { Root, Card, CardIcon, CardType, CardNumber } from './PaymentMethodForm.styled'
import BraintreeWebDropIn, { Dropin, Options, PaymentMethodPayload as Payload } from 'braintree-web-drop-in'
import Button, { ButtonProps } from '../../Button'
import Form, { FormError } from '../../Form'
import useForm from 'react-hook-form'
import { useTheme } from '../../../theme/useTheme'

export type Braintree = Dropin

export type PaymentMethodPayload = Payload

export type PaymentMethodFormProps = {
    submitButton: ButtonProps
    editButton: ButtonProps
    braintree: Omit<Options, 'container'>
    onSubmit: (payload: PaymentMethodPayload) => any
}

type ReducerState = {
    braintreeInstance: Braintree | null
    loading: boolean
    formError?: string | null
    editable: boolean
    paymentInfo?: Payload
}

type ReducerActions =
    | {
          type: 'setBraintree'
          payload: Braintree
      }
    | {
          type: 'unsetBraintree'
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
    braintreeInstance: null,
    loading: false,
    formError: null,
    editable: true,
    paymentInfo: undefined,
}

const reducer: Reducer<ReducerState, ReducerActions> = (state, action) => {
    switch (action.type) {
        case 'setBraintree':
            return {
                ...state,
                braintreeInstance: action.payload,
            }
        case 'unsetBraintree':
            return {
                ...state,
                braintreeInstance: null,
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
                braintreeInstance: null,
            }

        default:
            throw `Reducer action: ${action.type} not valid.`
    }
}

export const PaymentMethodForm: Component<PaymentMethodFormProps> = ({
    braintree,
    submitButton,
    editButton,
    onSubmit,
    ...props
}) => {
    const { colors } = useTheme()

    const { handleSubmit } = useForm<PaymentMethodPayload>()

    const containerElem = useRef(null)

    const [{ braintreeInstance, editable, loading, formError, paymentInfo }, dispatch] = useReducer(
        reducer,
        initialState
    )

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

            dispatch({ type: 'setBraintree', payload })
        } catch (error) {
            dispatch({ type: 'unsetBraintree' })
            console.error(error)
        }
    }, [containerElem, JSON.stringify(braintree)])

    useEffect(() => {
        if (editable && !braintreeInstance) createBraintreeInstance()

        return () => {
            if (braintreeInstance) braintreeInstance.teardown()
        }
    }, [braintreeInstance])

    const handleRequestPaymentMethod = useCallback(async () => {
        if (!braintreeInstance) return
        const payload = await braintreeInstance.requestPaymentMethod()
        dispatch({ type: 'setPaymentInfo', payload })
        return onSubmit(payload)
    }, [braintreeInstance, onSubmit])

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

            try {
                await handleSubmit(handleRequestPaymentMethod)(form)
            } catch (error) {
                dispatch({ type: 'setFormError', payload: error.message })
            }

            dispatch({ type: 'setLoader', payload: false })
        },
        [handleSubmit, braintreeInstance]
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

            {formError && <FormError>{formError}</FormError>}

            {loading || editable ? (
                <Button type="submit" loading={loading} {...submitButton} />
            ) : (
                <Button secondary onClick={handleOnEdit} {...editButton} />
            )}
        </Root>
    )
}
