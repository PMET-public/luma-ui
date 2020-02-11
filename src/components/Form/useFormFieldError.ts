import { useEffect } from 'react'
import { useFormContext, FieldError } from 'react-hook-form'
import _get from 'lodash.get'

export const useFormFieldError = (props: { name: string; error?: string }) => {
    const { name, error: _error } = props

    const { setError, clearError, errors } = useFormContext()

    useEffect(() => {
        if (_error) {
            setError(name, 'server', _error)
        } else {
            clearError(name)
        }
    }, [_error])

    return _get(errors, name) as FieldError
}
