import React, { FunctionComponent, createContext, useContext, useReducer, Reducer, Dispatch } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import { Root } from './theme/Root.styles'
import { ToastsStyles } from './theme/ToastsStyles'
import { GlobalStyles } from './theme/GlobalStyles'
import { defaultColors } from './theme/colors'
import { typography } from './theme/typography'
import { breakpoints, layout } from './theme/layout'
import 'focus-visible'

export type AppProviderProps = {}

type ReducerState = {}

type ReducerActions = {}

type AppContextProps = [ReducerState, Dispatch<ReducerActions>]

const initialState: ReducerState = {}

const reducer: Reducer<ReducerState, ReducerActions> = (state, action) => {
    switch (action) {
        // case 'setFoo':
        //     return {
        //         ...state,
        //     }

        default:
            throw `Reducer action not valid.`
    }
}

export const AppContext = createContext<AppContextProps>([initialState, () => {}])

export const AppProvider: FunctionComponent<AppProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const colors = defaultColors

    return (
        <AppContext.Provider value={[state, dispatch]}>
            <StyledThemeProvider theme={{ colors, typography, breakpoints, layout }}>
                <Root>{children}</Root>
                <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} />
                <ToastsStyles />
                <GlobalStyles />
            </StyledThemeProvider>
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const [state, dispatch] = useContext(AppContext)

    return {
        state,
        dispatch,
    }
}
