const tailwindcssTypography = require('@tailwindcss/typography');


module.exports = {
    theme: {
        extend: {},
        maxHeight: {
            '1/2': '50vh'
        },
        fontFamily: {
            'sans': ['-apple-system', 'BlinkMacSystemFont'],
            'serif': ['Georgia', 'Cambria'],
            'mono': ['SFMono-Regular', 'Menlo'],
            'heading': ['nunito'],
            'body': ['open-sans'],
            'apollon': ['apollon'],
            'massa': ['massa']
        },
        minHeight: {
            '0': '0',
            '1/4': '25vh',
            '1/2': '50vh',
            '3/4': '75vh',
            'full': '100vh',
        },
        height: {
            '0': '0',
            '1/4': '25vh',
            '1/2': '50vh',
            '3/4': '75vh',
            'full': '100vh',
        },
        typography: (theme) => ({
            default: {
                css: {
                    color: '#ffffff',

                    // ...
                }
            }
        }),
        variants: {},
        plugins: [
            require('@tailwindcss/typography')
        ],
    }
}
