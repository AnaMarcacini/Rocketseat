import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "DevStore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={inter.variable} lang="pt">
    {/*variable: '--font-inter' inter.variable -> cria uma variavel global da pagina // do css  */}
    {/* boas praticas : dessa forma crio uma variavel css para cada fonte */}
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>

      {/* bg-zinc-950 - fundo de tela cor escura 
      text-zinc-50 - cor do texto 
      antialiased - font smoothing antialised -> fonte menos rasurada
       */}
    </html>
  );
}