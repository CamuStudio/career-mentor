/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        '1': '1px', // Custom 1px blur
      },
      backgroundImage: {
        'text-gradient': 'radial-gradient(314.96% 155.59% at 72.22% 118.89%, #7CDDB8 11.49%, #89C9E1 28.64%, #A39EE5 78.94%)',
      },
      colors: {
        'Gray-100': '#F5F5F5',
        'Gray-200': '#E9EAEB',
        'Gray-300': '#D5D7DA',
        'Gray-400': '#A4A7AE',
        'Gray-500': '#717680',
        'Gray-600': '#535862',
        'Gray-700': '#414651',
        'Gray-800': '#252B37',
        'Gray-900': '#181D27',
        'Brand-50': '#F9F5FF',
        'Brand-100': '#F4EBFF',
        'Brand-500': '#9E77ED',
        'Brand-600': '#7F56D9',
        'Brand-700': '#6941C6',
        'Brand-900': '#42307D',
        'Purple-200': '#AE7BF4',
        'Success-300': '#6CE9A6',
      },
      fontSize: {
        '7xl': '72px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
          'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      lineHeight: {
        '11': '60px',
      },
      border: {
        1.5: '6px',
      },
      borderRadius: {
        '1.5xl': '12px',
        '4xl': '2rem',
      },
      boxShadow: {
        'xs': '0px 1px 2px 0px rgba(10, 13, 18, 0.05)',
      },
    },
  },
  plugins: [],
}

