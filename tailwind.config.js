/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    {
      name: "css",
      enforce: "post",
      transform: (code, id) => {
        if (id.endsWith(".css")) {
          return {
            code: code,
            map: null,
            hmr: true, // enable CSS hot-reloading
          };
        }
      },
    },
  ],
};
