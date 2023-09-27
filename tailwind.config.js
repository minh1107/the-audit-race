/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#FFD4FE'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        button: "0px 0px 36px 0px rgba(223, 97, 255, 0.38), 0px 0px 11px 0px rgba(255, 97, 239, 0.33), 0px 0px 75px 0px rgba(233, 97, 255, 0.59), 0px 0px 18px 0px rgba(252, 97, 255, 0.06), 0px 0px 20px 0px rgba(228, 57, 183, 0.20)",
      },
      backgroundImage: {
        button: 'linear-gradient(92deg, #F07DED 0.27%, #EC4AE7 51.91%, #F281EF 99.31%)',
        
      },
      fontFamily: {
        exoFont: ['exo']
      }
    },
  },
  plugins: [],
}
