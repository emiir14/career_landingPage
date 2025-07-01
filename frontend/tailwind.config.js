/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fefdf9',
          100: '#fef7ed',
          200: '#fef4e6',
          300: '#fde9d1',
          400: '#fbd9a5',
          500: '#f7c474',
          600: '#f0a94a',
          700: '#e6912a',
          800: '#d97919',
          900: '#b85c14',
        },
        warm: {
          50: '#fdf8f4',
          100: '#fbeee6',
          200: '#f6dcc9',
          300: '#efbfa1',
          400: '#e69b73',
          500: '#dd7a4e',
          600: '#d16539',
          700: '#af4f2a',
          800: '#8d4025',
          900: '#723523',
        }
      },
      fontFamily: {
        'light': ['Inter', 'system-ui', 'sans-serif'],
        'extralight': ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(60px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
};