/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/components/**/*.{html,js}', './app/pages/**/*.{html,js}', './app/index.html'],
	theme: {
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
			warning: '#f59e0b'
		},
		extend: {
			'boxShadow': {
				'3xl' : '0px 0px 0px 4px rgba(147, 51, 234, 0.3)',
				'hov' : '0px 4px 8px rgba(147, 51, 234, 0.3)',
				'sph' : 'inset 0 0 0 2px #a855f7',
				'sb' : 'inset 0 0 0 2px #9333ea',
				'si' : 'inset 0 0 0 2px #9ca3af',
				'sp' : 'inset 0 0 0 2px #4b5563',
				'sih' : '0 4px 8px rgba(147, 51, 234, 0.3)',
				'se' : 'inset 0 0 0 2px #e11d48',
				'sd' : 'inset 0 0 0 2px #9ca3af'
			}
		}
	},
	plugins: []
};
