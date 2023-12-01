/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImgGradient': "linear-gradient(to right, #000000b3, #000000b3), url('https://i.ibb.co/Q8SSc96/lukas-blazek-mc-SDtb-WXUZU-unsplash.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
}

