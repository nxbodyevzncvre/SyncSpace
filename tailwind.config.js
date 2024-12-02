/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html',
    './planets/**/*.{html,js}',
    './css/planets/**/*.css',
    './js/**/*.js',
    "./js/*.js"
  ],
  safelist: [ { pattern: /^(middle:flex-1|middle:flex|middle:items-center|middle:justify-center|middle:my-10|hidden|solar-system|relative|absolute|w- \[\d+rem\] |h- \[\d+rem\] |tablet:w- \[\d+rem\] |tablet:h- \[\d+rem\] |actual:w- \[\d+rem\] |actual:h- \[\d+rem\] |extra:w- \[\d+rem\] |extra:h- \[\d+rem\] |rounded-full|border-2|border-white|animate-spin-\d)$/, variants: ['sm', 'md', 'lg', 'xl', '2xl'],},],
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
