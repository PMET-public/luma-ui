export const light = {
    background: '#ffffff',
    onBackground: '#222222',

    surface: 'rgba(255, 255, 255, 1)',
    surface75: 'rgba(255, 255, 255, 0.75)',
    surface50: 'rgba(255, 255, 255, 0.5)',
    surface25: 'rgba(255, 255, 255, 0.25)',
    surface15: 'rgba(255, 255, 255, 0.15)',
    onSurface: 'rgba(34, 34, 34, 1)',
    onSurface75: 'rgba(34, 34, 34, 0.75)',
    onSurface50: 'rgba(34, 34, 34, 0.5)',
    onSurface25: 'rgba(34, 34, 34, 0.25)',
    onSurface15: 'rgba(34, 34, 34, 0.15)',

    primary: 'rgba(17, 17, 17, 1)',
    primary75: 'rgba(17, 17, 17, 0.75)',
    primary50: 'rgba(17, 17, 17, 0.5)',
    primary25: 'rgba(17, 17, 17, 0.25)',
    primary15: 'rgba(17, 17, 17, 0.15)',
    onPrimary: 'rgba(255, 255, 255, 1)',
    onPrimary75: 'rgba(255, 255, 255, 0.75)',
    onPrimary50: 'rgba(255, 255, 255, 0.5)',
    onPrimary25: 'rgba(255, 255, 255, 0.25)',
    onPrimary15: 'rgba(255, 255, 255, 0.15)',

    secondary: 'rgba(250, 250, 250, 1)',
    secondary75: 'rgba(250, 250, 250, 0.75)',
    secondary50: 'rgba(250, 250, 250, 0.5)',
    secondary25: 'rgba(250, 250, 250, 0.25)',
    secondary15: 'rgba(250, 250, 250, 0.15)',
    onSecondary: 'rgba(33, 33, 33, 1)',
    onSecondary75: 'rgba(33, 33, 33, 0.75)',
    onSecondary50: 'rgba(33, 33, 33, 0.5)',
    onSecondary25: 'rgba(33, 33, 33, 0.25)',
    onSecondary15: 'rgba(33, 33, 33, 0.15)',

    accent: 'rgba(161, 74, 36, 1)',
    accent75: 'rgba(161, 74, 36, 0.75)',
    accent50: 'rgba(161, 74, 36, 0.5)',
    accent25: 'rgba(161, 74, 36, 0.25)',
    accent15: 'rgba(161, 74, 36, 0.15)',
    onAccent: 'rgba(250, 250, 250, 1)',
    onAccent75: 'rgba(250, 250, 250, 0.75)',
    onAccent50: 'rgba(250, 250, 250, 0.5)',
    onAccent25: 'rgba(250, 250, 250, 0.25)',
    onAccent15: 'rgba(250, 250, 250, 0.15)',

    error: '#ffffff',
    onError: '#ef5350',

    warning: '#ffffff',
    onWarning: '#f57c00',

    notice: '#ffffff',
    onNotice: '#039be5',
}

/**
 * Dark Theme Color Scheme-
 */
export const dark = {
    background: '#222222',
    onBackground: '#ffffff',

    surface: 'rgba(34, 34, 34, 1)',
    surface75: 'rgba(34, 34, 34, 0.75)',
    surface50: 'rgba(34, 34, 34, 0.5)',
    surface25: 'rgba(34, 34, 34, 0.25)',
    surface15: 'rgba(34, 34, 34, 0.15)',
    onSurface: 'rgba(255, 255, 255, 1)',
    onSurface75: 'rgba(255, 255, 255, 0.75)',
    onSurface50: 'rgba(255, 255, 255, 0.5)',
    onSurface25: 'rgba(255, 255, 255, 0.25)',
    onSurface15: 'rgba(255, 255, 255, 0.15)',

    primary: 'rgba(255, 255, 255, 1)',
    primary75: 'rgba(255, 255, 255, 0.75)',
    primary50: 'rgba(255, 255, 255, 0.5)',
    primary25: 'rgba(255, 255, 255, 0.25)',
    primary15: 'rgba(255, 255, 255, 0.15)',
    onPrimary: 'rgba(17, 17, 17, 1)',
    onPrimary75: 'rgba(17, 17, 17, 0.75)',
    onPrimary50: 'rgba(17, 17, 17, 0.5)',
    onPrimary25: 'rgba(17, 17, 17, 0.25)',
    onPrimary15: 'rgba(17, 17, 17, 0.15)',

    secondary: 'rgba(33, 33, 33, 1)',
    secondary75: 'rgba(33, 33, 33, 0.75)',
    secondary50: 'rgba(33, 33, 33, 0.5)',
    secondary25: 'rgba(33, 33, 33, 0.25)',
    secondary15: 'rgba(33, 33, 33, 0.15)',
    onSecondary: 'rgba(250,250,250, 1)',
    onSecondary75: 'rgba(250,250,250, 0.75)',
    onSecondary50: 'rgba(250,250,250, 0.5)',
    onSecondary25: 'rgba(250, 250, 250, 0.25)',
    onSecondary15: 'rgba(250, 250, 250, 0.15)',

    accent: 'rgba(161, 74, 36, 1)',
    accent75: 'rgba(161, 74, 36, 0.75)',
    accent50: 'rgba(161, 74, 36, 0.5)',
    accent25: 'rgba(161, 74, 36, 0.25)',
    accent15: 'rgba(161, 74, 36, 0.15)',
    onAccent: 'rgba(250, 250, 250, 1)',
    onAccent75: 'rgba(250, 250, 250, 0.75)',
    onAccent50: 'rgba(250, 250, 250, 0.5)',
    onAccent25: 'rgba(250, 250, 250, 0.25)',
    onAccent15: 'rgba(250, 250, 250, 0.15)',

    error: '#ef5350',
    onError: '#ffffff',

    warning: '#f57c00',
    onWarning: '#ffffff',

    notice: '#039be5',
    onNotice: '#ffffff',
}

export type ThemeColors = typeof light | typeof dark
