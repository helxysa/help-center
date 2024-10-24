import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./componentes/Nav";



export const metadata: Metadata = {
  title: "Base de Conhecimento - Peticionamento",
  description: "Base de Conhecimento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-gray-100 vsc-initialized"
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
