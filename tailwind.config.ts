import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/partials/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      yellow: "#DFF69D",
      neutral: {
        900: "#0E0E0E",
        800: "#212121",
        50: "#FAFAFA",
      },
    },
  },
};

export default config;
