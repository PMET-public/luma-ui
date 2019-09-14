export const breakpoints = {
    smallOnly: '(max-width: 599px)',
    medium: '(min-width: 600px)',
    mediumOnly: '(min-width: 600px) and (max-width: 991px)',
    large: '(min-width: 992px)',
    largeOnly: ' (min-width: 992px) and (max-width: 1599px)',
    xLarge: '(min-width: 1600px)',
}

export type Breakpoints = typeof breakpoints

export const layout = {
    containedWidth: '190rem',
    margin: '2rem',
}

export type Layout = typeof layout
