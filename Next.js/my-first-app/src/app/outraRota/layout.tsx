import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sobrescrevendo o nome que aparece na aba",
  description: "Generated by create next app",
};

export default function outraRotaLayout({  children}: {  children: React.ReactNode}) {
  return (
        <div>
          <p>ISSO É UM CABEÇALHO COMUM PARA QUALQUER PAGINA dentro da rota /outra rota</p>
        {children}
          </div>
  );
}
