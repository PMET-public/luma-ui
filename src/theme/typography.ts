export const typography = {
    body: {
        family: 'source-sans-pro, sans-serif',
        style: 'normal',
        weight: {
            normal: 400,
            semi: 400,
            bold: 700,
        },
    },

    heading: {
        family: 'rucksack, sans-serif',
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

export type ThemeTypography = typeof typography
