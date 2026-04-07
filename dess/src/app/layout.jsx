import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ana Fernandes Studio | Design de Sobrancelhas",
  description:
    "Landing page elegante e leve para um estúdio de design de sobrancelhas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#FBF7FC] text-[#3B1650] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
