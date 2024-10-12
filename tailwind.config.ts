import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'primary': '#F9F9F9',
      'secundary': '#E8E8E8',
      'primary-blue': '#1BB1E0',

      'primary-orange': '#FF7700',
      'background-orange': '#421808',

      'blue-link': '#1C84B5',

      'gray': '#39454A',

    },
    extend: {
      backgroundImage: {
        "halloween_banner": "url('/images/Halloween_Landing_Page_Banner.png')",
        "evento_logo": "url('/images/Noite_Sombria_Logo.png')",
        "red-gradient": "linear-gradient(0deg, rgba(66,24,8,1) 0%, rgba(66,24,8,0.5) 42%, rgba(66,24,8,0) 100%)",
        'menu-button': "url('/images/menu-button.svg')",

        "eclipse_logo": "url('/images/EclipseLogo.png')",
        "eclipse_logo_black": "url('/images/EclipseLogo_Black.png')",
        "eclipse_logo_orange": "url('/images/EclipseLogo_Orange.png')",
      },
    },
  },
  plugins: [],
};
export default config;
