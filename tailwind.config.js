/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1976BB',
        'primary-light': '#77D4FC',
        gray: '#677889',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'professional': '0 4px 6px -1px rgba(25, 118, 187, 0.1), 0 2px 4px -1px rgba(25, 118, 187, 0.06)',
        'professional-lg': '0 10px 15px -3px rgba(25, 118, 187, 0.1), 0 4px 6px -2px rgba(25, 118, 187, 0.05)',
        'modern': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'modern-lg': '0 25px 50px -12px rgba(25, 118, 187, 0.25)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1976BB 0%, #677889 50%, #77D4FC 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}

