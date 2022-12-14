/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
   theme: {
      screens: {
         sm: '480px',
         md: '768px',
         lg: '976px',
         xl: '1440px',
      },
      fontSize: {
         sm: '0.9rem',
         base: '1rem',
         md: '2rem',
         large: '2.5rem',
         xl: '1.25rem',
         xl2: '1.563rem',
         xl3: '1.85rem',
         xl4: '2.4rem',
         xl5: '3.052rem',
      },
      extend: {
         colors: {
            sectionBlack: '#191919',
            imgBlack: '#1f1f1f',
            hoverBlack: '#4C4C4C',
            white: '#FFFFFF',
            checkoutBg: '#F2F2F2',
            fleshWhite: '#F1F1F1',
            lotionWhite: '#FAFAFA',
            peruOrange: '#D87D4A',
            hoverOrange: '#fbaf85',
            spanishGray: '#979797',
            borderWhite: '#D8D8D8',
            lightBox: 'rgba(0, 0, 0, 0.2)',
         },
         height: {
            128: '32rem',
         },
      },
   },
   plugins: [],
}
