// tailwindcss.config.js
export default {
    // Your Tailwind CSS custom configuration goes here
    content: [],
    theme: {
        extend: {
            colors: {
                primary: '#42B883',
                secondary: '#35495E',
                neutral: '#F7F9FA',
            },
            // 1.5rem * 16 = 24px
            // 24px / 16 = 1.5rem
            // 0.5rem = 8 px
            // 1rem = 16 px
            container: {
                center: true,
                padding: {
                    DEFAULT: '1.5rem', // horizontal padding
                    lg: '4rem',
                    xl: '4rem',
                    '2xl': '4rem',
                },
                screens: {
                    sm: '576px',
                    md: '768px',
                    lg: '992px',
                    xl: '1200px',
                    '2xl': '1400px',
                },
            },
        },
    },
    plugins: [],
}
