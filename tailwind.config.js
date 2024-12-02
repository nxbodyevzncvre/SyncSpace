/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './index.html', // Главная страница
    './planets/**/*.{html}', // Страницы для каждой планеты
    './css/**/*.css', // Все CSS файлы
  ],
  
  safelist: [
    /^text-\[\d+rem\]/,    // для текста с динамическим размером в rem
    /^w-\[\d+rem\]/,       // для ширины с динамическим значением в rem
    /^w-\[\d+vw\]/,        // для ширины с динамическим значением в vw
    /^h-\[\d+rem\]/,       // для высоты с динамическим значением в rem
    /^h-\[\d+vh\]/         // для высоты с динамическим значением в vh
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
        "solar-sys": "url('/img/backround/Galaxy Starry Night.jpg')",  // Путь исправлен на относительный
        "slider": "url('/img/backround/image.png')"                    // Путь исправлен на относительный
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
