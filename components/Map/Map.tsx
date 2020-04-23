import React, { useCallback, useState, Suspense, useRef } from 'react'
import { Component } from '../../lib'
import { Root, Marker, Location, Title } from './Map.styled'

import { useTransition, animated } from 'react-spring'

import StoreMarkerSvg from 'remixicon/icons/Map/map-pin-fill.svg'
import CloseSvg from 'remixicon/icons/System/close-circle-fill.svg'
import { Props as GoogleMapsProps, Coords } from 'google-map-react'
import Error from '../Error'

const GoogleMapReact = React.lazy(() => import('google-map-react')) as React.ComponentType<GoogleMapsProps>

type Location = {
    _id?: number
    name: string
    country: string
    lng: number
    lat: number
    comment: string
    phone: string
    address: string
    city: string
    state: string
    zipCode: string
}

export type MapProps = {
    apiKey: string
    locations: Location[]
    controls?: boolean
}

const MapMarker = (props: { show?: boolean } & Location) => {
    const { show = false, ...location } = props

    const toggleTransitions = useTransition(show, null, {
        from: { position: 'absolute', top: 100, opacity: 0 },
        enter: { top: 0, opacity: 1 },
        leave: { top: 100, opacity: 0 },
    })

    if (!location) return null

    const { name, country, comment, phone, address, city, state, zipCode, ...coords } = location

    return (
        <React.Fragment>
            <Marker aria-selected={show || undefined} as={show ? CloseSvg : StoreMarkerSvg} />
            {toggleTransitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div key={key} style={props}>
                            <Location {...coords}>
                                {name && <Title>{name}</Title>}

                                {address && (
                                    <React.Fragment>
                                        <br /> {address}
                                    </React.Fragment>
                                )}

                                {city && state ? (
                                    <React.Fragment>
                                        <br /> {city}, {state} {zipCode}
                                    </React.Fragment>
                                ) : (
                                    (city || state || zipCode) && (
                                        <React.Fragment>
                                            Crap
                                            <br /> {city || state} {zipCode}
                                        </React.Fragment>
                                    )
                                )}

                                {phone && (
                                    <React.Fragment>
                                        <br /> {phone}
                                    </React.Fragment>
                                )}

                                {country && (
                                    <React.Fragment>
                                        <br /> {country}
                                    </React.Fragment>
                                )}

                                {comment && (
                                    <React.Fragment>
                                        <br /> {comment}
                                    </React.Fragment>
                                )}
                            </Location>
                        </animated.div>
                    )
            )}
        </React.Fragment>
    )
}

export const Map: Component<MapProps> = ({ apiKey, controls, locations = [], ...props }) => {
    const mapRef = useRef<any>()

    const [selected, setSelected] = useState<number>()

    const handleApiLoaded = useCallback(
        ({ map }) => {
            mapRef.current = map
            // Center Map
            map.fitBounds(map.getBounds())
        },
        [mapRef]
    )

    const handleInfoToggle = useCallback(
        (_key: string, { lat, lng }: Coords) => {
            const key = Number(_key)
            mapRef.current?.panTo({ lat, lng })
            setSelected(selected === key ? undefined : key)
        },
        [selected, setSelected, mapRef]
    )

    if (!apiKey) return <Error>Missing Google Maps API Key</Error>

    return (
        <Suspense fallback="">
            <Root {...props}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: apiKey }}
                    defaultCenter={{ lat: 30.40134, lng: -97.72415 }}
                    zoom={10}
                    onGoogleApiLoaded={handleApiLoaded}
                    onChildClick={handleInfoToggle}
                    yesIWantToUseGoogleMapApiInternals
                    options={{
                        disableDefaultUI: !controls,
                        mapTypeControl: controls,
                    }}
                >
                    {locations.map(({ _id, ...location }) => (
                        <MapMarker key={_id} show={selected === _id} {...location} />
                    ))}
                </GoogleMapReact>
            </Root>
        </Suspense>
    )
}
