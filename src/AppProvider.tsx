import React, { FunctionComponent, useEffect, createContext, useContext, useReducer, Reducer, Dispatch } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ResetStyles } from './theme/ResetStyles'
import { GlobalStyles, Root } from './theme/GlobalStyles'
import * as colorSchemes from './theme/colors'
import { typography } from './theme/typography'
import { breakpoints, layout } from './theme/layout'

export type AppProviderProps = {}

type ReducerState = {
    colorScheme: string
}

type ReducerActions = {
    type: 'setColorScheme'
    payload: string
}

type AppContextProps = [ReducerState, Dispatch<ReducerActions>]

const initialState: ReducerState = {
    colorScheme: (typeof localStorage !== 'undefined' && localStorage.getItem('luma-ui/colorScheme')) || 'light',
}

const reducer: Reducer<ReducerState, ReducerActions> = (state, action) => {
    switch (action.type) {
        case 'setColorScheme':
            return {
                ...state,
                colorScheme: action.payload,
            }
        default:
            throw `Reducer action not valid.`
    }
}

export const AppContext = createContext<AppContextProps>([initialState, x => {}])

export const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        localStorage.setItem('luma-ui/colorScheme', state.colorScheme)
    }, [state.colorScheme])

    const colors = colorSchemes[state.colorScheme]

    return (
        <AppContext.Provider value={[state, dispatch]}>
            <StyledThemeProvider theme={{ colors, typography, breakpoints, layout, colorScheme: state.colorScheme }}>
                <Root>
                    <ResetStyles />
                    <GlobalStyles />
                    {children}
                </Root>
            </StyledThemeProvider>
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const [state, dispatch] = useContext(AppContext)

    return {
        state,
        actions: {
            setColorScheme: (theme: string) => dispatch({ type: 'setColorScheme', payload: theme }),
        },
    }
}
