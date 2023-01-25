/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                custom: 'Rubik'
            },
            colors: {
                'primary-base': '#9333ea',
                'primary-hover': '#a855f7',
                'primary-disabled': '#d8b4fe',
                'primary-background': '#f3e8ff',
                'dark-grey-base': '#1f2937',
                'dark-grey-placeholder': '#4b5563',
                'dark-grey-disabled': '#9ca3af',
                error: '#e11d48',
                success: '#22c55e',
                warning: '#f59e0b',
                white: '#ffffff'
            },
            padding: {
                ms: '10px 16px',
                lg: '10px 24px'
            },
            boxShadow: {
                hover: '0 4px 8px',
                focus: '0 0 0 2px'
            }
        }
    }
};
