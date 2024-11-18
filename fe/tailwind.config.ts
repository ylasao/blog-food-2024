import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)"
      },
      backgroundImage: {
        backgroundRGB: "rgb(98,250,185)",
        backgroundLinear:
          "linear-gradient(0deg, rgba(98,250,185,0.5858718487394958) 0%, rgba(222,186,19,1) 100%)"
      },
      fontFamily: {
        "be-vietnam-pro": ['"Be Vietnam Pro"', "sans-serif"]
      },
      animation: {
        gradient: "gradientAnimation 5s ease infinite"
      },
      keyframes: {
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" }
        }
      },
      backgroundSize: {
        "200": "200%"
      }
    }
  },

  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".be-vietnam-pro-thin": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "100"
        },
        ".be-vietnam-pro-extralight": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "200"
        },
        ".be-vietnam-pro-light": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "300"
        },
        ".be-vietnam-pro-regular": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "400"
        },
        ".be-vietnam-pro-medium": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "500"
        },
        ".be-vietnam-pro-semibold": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "600"
        },
        ".be-vietnam-pro-bold": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "700"
        },
        ".be-vietnam-pro-extrabold": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "800"
        },
        ".be-vietnam-pro-black": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "900"
        },
        // Italic variations
        ".be-vietnam-pro-thin-italic": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "100",
          fontStyle: "italic"
        },
        ".be-vietnam-pro-extralight-italic": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "200",
          fontStyle: "italic"
        },
        ".be-vietnam-pro-light-italic": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "300",
          fontStyle: "italic"
        },
        ".be-vietnam-pro-regular-italic": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "400",
          fontStyle: "italic"
        },
        ".be-vietnam-pro-medium-italic": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "500",
          fontStyle: "italic"
        },
        ".be-vietnam-pro-semibold-italic": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "600",
          fontStyle: "italic"
        },
        ".be-vietnam-pro-bold-italic": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "700",
          fontStyle: "italic"
        },
        ".be-vietnam-pro-extrabold-italic": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "800",
          fontStyle: "italic"
        },
        ".be-vietnam-pro-black-italic": {
          fontFamily: '"Be Vietnam Pro", sans-serif',
          fontWeight: "900",
          fontStyle: "italic"
        }
      });
    }),
    require("tailwindcss-motion")
  ]
};

export default config;
