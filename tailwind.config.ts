import { Poppins, Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1921px',
      },
      gridTemplateColumns:{
        "layout1":" repeat(2, minmax(0, 33%))",
        "phone":" repeat(2, minmax(0, 50%))"
      },
      backgroundPosition:{
        "center-4":'calc(50% - 5rem) 0%',
        "testbg":"50% 0% ",
        "md-bg":"50% -1%"
      },
      height:{
        "70":"80vh"
      },
      zIndex:{
        mz:"-10"
      },
      colors:{
        "main-light":{
          DEFAULT:"#FDD67B"
        },
        mainBg:{
          DEFAULT:"#96A2A2"
        }
      },
      backgroundImage: {
        "xlmain-bg":"url('/bg-test11.png')",
        "main-bg":"url('/bg-test2.png')",
        "devis-bg":"url('/devis-bg.png')",
        "phonebg": "url('/phonebg-1.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        sans:['var(--font-poppins)'],
      }
    },
  },
  plugins: [],
};
export default config;
