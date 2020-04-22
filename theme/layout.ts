export const defaultBreakpoints = {
    smallOnly: '(max-width: 599px)',
    medium: '(min-width: 600px)',
    mediumOnly: '(min-width: 600px) and (max-width: 991px)',
    untilMedium: '(max-width: 991px)',
    large: '(min-width: 992px)',
    largeOnly: '(min-width: 992px) and (max-width: 1599px)',
    untilLarge: '(max-width: 1599px)',
    xLarge: '(min-width: 1600px)',
}

export type ThemeBreakpoints = typeof defaultBreakpoints

export const defaultLayout = {
    containedWidth: '190rem',
    margin: '2rem',
}

export type ThemeLayout = typeof defaultLayout
