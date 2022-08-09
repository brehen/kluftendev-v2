const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  daisyui: {
    themes: [
      {
        kluften: {
          primary: '#2c4c7f',
          secondary: '#1a338f',
          accent: '#ff3c9c',
          neutral: '#010101',
          'base-100': '#E9E0EB',
          info: '#AACEE9',
          success: '#15605A',
          warning: '#ef591e',
          error: '#F31651',
        },
      },
    ],
  },
  theme: {
    screens: defaultTheme.screens,
    extend: {
      fontFamily: {
        sans: ['Overpass', ...defaultTheme.fontFamily.sans],
        fancy: ['Poppins'],
      },
      screens: {
        '3xl': '2560px',
      },
      colors: {
        main: '#16296e',
        secondary: '#1a338f',
        tertiary: '#236ada',
        fortiary: '#E5EFFF',
        accent: '#ff3c9c',
        'accent-alt': '#dd5d2e',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
