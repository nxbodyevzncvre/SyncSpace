
/** @type {import('tailwindcss').Config} */


module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html'
  ],
  // content: ["index.html", 
  //   "/planets/mercury/mercury.html",
  //   "/planets/venus/venus.html", 
  //   "/planets/earth/earth.html", 
  //   "/planets/mars/mars.html", 
  //   "/planets/jupiter/jupiter.html",
  //   "/planets/saturn/saturn.html",
  //   "/planets/uranus/uranus.html", 
  //   "/planets/neptun/neptun.html",],
  theme: {
    screens:{
      "extra": "2560px",
      "actual": "1920px",
      'laptop': '1600px',
      'tablet': '1400px',
      "middle": '1200px',
      'tablet2': '1000px',
      'phones': '800px',
    },
    extend: {
      fontFamily:{
        itim: ["Itim", "cursive"],
        inter: ["Inter", "cursive"],
      },
      colors:{
        block: "#333333",
      },
      backgroundImage:{
        "slider":"url('./img/slider-photo.png')"
      }


    },
  },
  plugins: [],
}

