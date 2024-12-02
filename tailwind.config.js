/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './planets/**/*.{html,js}',
    './css/planets/**/*.css',
    './js/**/*.js',
    "./js/*.js"
  ],
  safelist: [
    /^text-\[\d+rem\]/,
    /^w-\[\d+rem\]/,   
    /^w-\[\d+vw\]/, 
    /^h-\[\d+rem\]/,
    /^h-\[\d+vh\]/         
  ],
  theme: {
    screens: {
      "extra": "2560px",
      "actual": "1920px",
      'laptop': '1600px',
      'tablet': '1400px',
      "middle": '1200px',
      'tablet2': '1000px',
      'phones': '800px',
    },
    extend: {
      backgroundImage: {
        "solar-sys": "url('./img/backround/Galaxy Starry Night.jpg')",
        "slider": "url('./img/backround/image.png')"        
      },
      fontFamily: {
        itim: ["Itim", "cursive"],
        inter: ["Inter", "cursive"],
      },
      colors: {
        block: "#333333",
      },
    },
  },
  plugins: [],
}
