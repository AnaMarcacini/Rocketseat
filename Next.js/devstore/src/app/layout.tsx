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
    <html lang="en">
      <body className={inter.variable}>{children}</body> 
      {/*variable: '--font-inter' inter.variable -> cria uma variavel global da pagina // do css  */}
      {/* boas praticas : dessa forma crio uma variavel css para cada fonte */}
    </html>
  );
}