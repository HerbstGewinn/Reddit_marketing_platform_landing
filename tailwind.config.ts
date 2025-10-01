import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f3ff',
          100: '#eee7ff',
          200: '#dccfff',
          300: '#c0a6ff',
          400: '#a17bff',
          500: '#7f4dff',
          600: '#6a30ff',
          700: '#5a21ea',
          800: '#4a1cc0',
          900: '#3b1799'
        },
        accent: '#FFD166'
      },
      boxShadow: {
        glow: '0 0 0 6px rgb(127 77 255 / 10%)'
      }
    }
  },
  plugins: []
}

export default config
