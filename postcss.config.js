module.exports = {
    plugins: [
        require('postcss-preset-env')({
            stage: 0,
            features: {
                'nesting-rules': true,
                'custom-media-queries': {
                    importFrom: './src/theme/breakpoints.css'
                  },
            },
        }),
    ]
};
