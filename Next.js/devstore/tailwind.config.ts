import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {


    extend: {// assim eu não substituo todas as opções do tailwindcss pelas citadas mas apenas adiciono elas nas opções já existentes
      fontFamily: {
        sans: 'var(--font-inter)',// defino variavel padrão como a font inter
      },
      gridTemplateRows: {
        app: 'min-content max-content',
      },
    },
  },
   
  plugins: [],
};
export default config;
