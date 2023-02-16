/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    // corePlugins: { preflight: false},
    theme: {
        extend: {
            fontFamily: {
                custom: 'Rubik'
            },
            colors: {
                'primary-base': '#9333ea',
                'primary-hover': '#a855f7',
                'primary-disabled': '#d8b4fe',
                'primary-background': '#F3e8FF',
                'dark-grey-base': '#1f2937',
                'dark-grey-placeholder': '#4b5563',
                'dark-grey-disabled': '#9ca3af',
                error: '#e11d48',
                success: '#22c55e',
                warning: '#f59e0b',
                white: '#ffffff',
                'profile-gradient-from': 'rgb(147,51,234)',
                'profile-gradient-to': 'rgb(73,8,132)'
            },
            padding: {
                ms: '10px 16px',
                lg: '10px 24px',
                input: '10px 16px'
            },
            boxShadow: {
                hover: '0 4px 8px',
                focus: '0 0 0 2px',
                snack: '0 4px 16px',
                navbar: '0 -4px 8px 0 rgba(31, 41, 55, 0.16)',
                'profile-nav': 'inset 0px -1px 0px #9CA3AF',
                'profile-nav-current': 'inset 0px -2px 0px #9333EA',
                'play-pause': '0px 4px 8px rgba(147, 51, 234, 0.3)'
            }
        }
    }
};
