const themeStyle = require("./config/variables.json");
const fontPrimary = themeStyle.font.font_family.primary.replace(/\+/g, " ");
const fontPrimaryType = themeStyle.font.font_family.primary_type;
const font_base = Number(themeStyle.font.font_size.base.replace("px", ""));
const font_scale = Number(themeStyle.font.font_size.scale);
const h6 = font_base / font_base;
const h5 = h6 * font_scale;
const h4 = h5 * font_scale;
const h3 = h4 * font_scale;
const h2 = h3 * font_scale;
const h1 = h2 * font_scale;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: themeStyle.color.theme_color.primary,
        body: themeStyle.color.theme_color.body,
        "border-default": themeStyle.color.theme_color.border,
        "text-dark": themeStyle.color.text_color.dark,
        "text-default": themeStyle.color.text_color.default,
        "text-light": themeStyle.color.text_color.light,
        light: themeStyle.color.basic_color.light,
        white: themeStyle.color.basic_color.white,
        dark: themeStyle.color.basic_color.dark,
        black: themeStyle.color.basic_color.black,
      },
      fontSize: {
        base: font_base + "px",
        "base-md": Math.ceil(font_base * 0.85) + "px",
        "base-sm": Math.ceil(font_base * 0.8) + "px",
        h1: h1 + "rem",
        h2: h2 + "rem",
        h3: h3 + "rem",
        h4: h4 + "rem",
        h5: h5 + "rem",
        h6: h6 + "rem",
      },
      fontFamily: {
        primary: [
          fontPrimary.replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, ""),
          fontPrimaryType,
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
