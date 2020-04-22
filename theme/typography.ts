export const defaultTypography = {
    body: {
        family: 'source-sans-pro, Helvetica, sans-serif',
        style: 'normal',
        weight: {
            normal: 400,
            semi: 600,
            bold: 700,
        },
    },

    heading: {
        family: 'rucksack, Helvetica, sans-serif',
        style: 'normal',
        weight: {
            normal: 400,
            semi: 500,
            bold: 600,
            bolder: 900,
        },
        size: {
            primary: '2.6rem',
            secondary: '2rem',
        },
    },
}

export type ThemeTypography = typeof defaultTypography
