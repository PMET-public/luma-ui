import React, { useRef, useCallback } from 'react'
import Braintree from '.'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'
import { Dropin } from 'braintree-web-drop-in'

storiesOf('📦 Components/Checkout/Braintree', module).add('Default', () => {
    const instance = useRef<Dropin>()

    const options = object('options', {
        authorization:
            'eyJ2ZXJzaW9uIjoyLCJhdXRob3JpemF0aW9uRmluZ2VycHJpbnQiOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpGVXpJMU5pSXNJbXRwWkNJNklqSXdNVGd3TkRJMk1UWXRjMkZ1WkdKdmVDSXNJbWx6Y3lJNklrRjFkR2g1SW4wLmV5SmxlSEFpT2pFMU56STBOVEF3TXpNc0ltcDBhU0k2SW1NMVpqRmpORGd6TFRFNU0yVXROR1ExT1MxaFptUmpMV05tTXpSbU56UmhNak16T1NJc0luTjFZaUk2SW5wcmR6SmpkSEpyYWpjMWJtUjJhMk1pTENKcGMzTWlPaUpCZFhSb2VTSXNJbTFsY21Ob1lXNTBJanA3SW5CMVlteHBZMTlwWkNJNklucHJkekpqZEhKcmFqYzFibVIyYTJNaUxDSjJaWEpwWm5sZlkyRnlaRjlpZVY5a1pXWmhkV3gwSWpwbVlXeHpaWDBzSW5KcFoyaDBjeUk2V3lKdFlXNWhaMlZmZG1GMWJIUWlYU3dpYjNCMGFXOXVjeUk2ZXlKdFpYSmphR0Z1ZEY5aFkyTnZkVzUwWDJsa0lqb2liV0ZuWlc1MGJ5SjlmUS5KOGFhZktpT3pxY0JtTFE5eDgtSkNCOUdEU093ajdGZmQwMWpULWdDS1oyQW9GMUZJNWV1YnN6MTlTZHpPa090TEJ5MDE3TllPMHYzWVUzYU1STEJodyIsImNvbmZpZ1VybCI6Imh0dHBzOi8vYXBpLnNhbmRib3guYnJhaW50cmVlZ2F0ZXdheS5jb206NDQzL21lcmNoYW50cy96a3cyY3Rya2o3NW5kdmtjL2NsaWVudF9hcGkvdjEvY29uZmlndXJhdGlvbiIsImdyYXBoUUwiOnsidXJsIjoiaHR0cHM6Ly9wYXltZW50cy5zYW5kYm94LmJyYWludHJlZS1hcGkuY29tL2dyYXBocWwiLCJkYXRlIjoiMjAxOC0wNS0wOCJ9LCJjaGFsbGVuZ2VzIjpbXSwiZW52aXJvbm1lbnQiOiJzYW5kYm94IiwiY2xpZW50QXBpVXJsIjoiaHR0cHM6Ly9hcGkuc2FuZGJveC5icmFpbnRyZWVnYXRld2F5LmNvbTo0NDMvbWVyY2hhbnRzL3prdzJjdHJrajc1bmR2a2MvY2xpZW50X2FwaSIsImFzc2V0c1VybCI6Imh0dHBzOi8vYXNzZXRzLmJyYWludHJlZWdhdGV3YXkuY29tIiwiYXV0aFVybCI6Imh0dHBzOi8vYXV0aC52ZW5tby5zYW5kYm94LmJyYWludHJlZWdhdGV3YXkuY29tIiwiYW5hbHl0aWNzIjp7InVybCI6Imh0dHBzOi8vb3JpZ2luLWFuYWx5dGljcy1zYW5kLnNhbmRib3guYnJhaW50cmVlLWFwaS5jb20vemt3MmN0cmtqNzVuZHZrYyJ9LCJ0aHJlZURTZWN1cmVFbmFibGVkIjpmYWxzZSwicGF5cGFsRW5hYmxlZCI6dHJ1ZSwicGF5cGFsIjp7ImRpc3BsYXlOYW1lIjoiTWFnZW50byIsImNsaWVudElkIjpudWxsLCJwcml2YWN5VXJsIjoiaHR0cDovL2V4YW1wbGUuY29tL3BwIiwidXNlckFncmVlbWVudFVybCI6Imh0dHA6Ly9leGFtcGxlLmNvbS90b3MiLCJiYXNlVXJsIjoiaHR0cHM6Ly9hc3NldHMuYnJhaW50cmVlZ2F0ZXdheS5jb20iLCJhc3NldHNVcmwiOiJodHRwczovL2NoZWNrb3V0LnBheXBhbC5jb20iLCJkaXJlY3RCYXNlVXJsIjpudWxsLCJhbGxvd0h0dHAiOnRydWUsImVudmlyb25tZW50Tm9OZXR3b3JrIjp0cnVlLCJlbnZpcm9ubWVudCI6Im9mZmxpbmUiLCJ1bnZldHRlZE1lcmNoYW50IjpmYWxzZSwiYnJhaW50cmVlQ2xpZW50SWQiOiJtYXN0ZXJjbGllbnQzIiwiYmlsbGluZ0FncmVlbWVudHNFbmFibGVkIjp0cnVlLCJtZXJjaGFudEFjY291bnRJZCI6Im1hZ2VudG8iLCJjdXJyZW5jeUlzb0NvZGUiOiJVU0QifSwibWVyY2hhbnRJZCI6InprdzJjdHJrajc1bmR2a2MiLCJ2ZW5tbyI6Im9mZiIsIm1lcmNoYW50QWNjb3VudElkIjoibWFnZW50byJ9',
        vaultManager: true,
        preselectVaultedPaymentMethod: true,
    })

    const handleRequestPaymentMethod = useCallback(async () => {
        if (instance.current) {
            const res = await instance.current.requestPaymentMethod()
            console.log(res)
        }
    }, [instance.current])

    return (
        <div style={{ display: 'grid', gridGap: '1rem' }}>
            <Braintree options={options} onLoad={_instance => (instance.current = _instance)} />
            <button onClick={handleRequestPaymentMethod}>Request Payment</button>
        </div>
    )
})
