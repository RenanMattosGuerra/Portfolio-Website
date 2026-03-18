import type { Metadata } from "next";
import { Zalando_Sans, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AosInit } from "@/components/aos-init";
import { Providers } from "@/components/providers";

export const zalando = Zalando_Sans({
  variable: "--font-zalando",
});

export const roboto = Roboto({
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Portfolio - Renan Guerra",
  description: "Front-end Developer Portfolio",
  openGraph: {
    title: "Portfolio - Renan Guerra",
    description: "Front-end Developer Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className="w-full overflow-x-hidden min-h-screen flex flex-col">
        <Providers>
          <Header></Header>
          {children}
          <Footer></Footer>
          <AosInit></AosInit>
        </Providers>
      </body>
    </html>
  );
}
