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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.anafernandesstudio.com.br";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ana Fernandes Studio | Design de Sobrancelhas",
    template: "%s | Ana Fernandes Studio",
  },
  description:
    "Design de sobrancelhas com visagismo, simetria e naturalidade. Agende seu horário no Ana Fernandes Studio.",
  keywords: [
    "design de sobrancelhas",
    "sobrancelhas",
    "visagismo",
    "design de olhar",
    "estúdio de sobrancelhas",
    "Ana Fernandes Studio",
    "Porto Alegre",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Ana Fernandes Studio" }],
  creator: "Ana Fernandes Studio",
  publisher: "Ana Fernandes Studio",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Ana Fernandes Studio",
    url: "/",
    title: "Ana Fernandes Studio | Design de Sobrancelhas",
    description:
      "Design de sobrancelhas com visagismo, simetria e naturalidade. Agende seu horário no Ana Fernandes Studio.",
    images: [
      {
        url: "/foto_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Ana Fernandes Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ana Fernandes Studio | Design de Sobrancelhas",
    description:
      "Design de sobrancelhas com visagismo, simetria e naturalidade. Agende seu horário no Ana Fernandes Studio.",
    images: ["/foto_hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "beauty",
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
