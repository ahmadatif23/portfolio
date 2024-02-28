import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          1: "#3d5a80",
          2: "#98c1d9",
          3: "#e0fbfc",
          4: "#ee6c4d",
          5: "#293241",
        },
      },
    },
  },
  plugins: [],
};
export default config;
