import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat, Encode_Sans_Condensed, Saira_Condensed } from "next/font/google";
import "./globals.css";
import AmplitudeProvider from "./components/AmplitudeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300"],
});

const encodeSansCondensed = Encode_Sans_Condensed({
  variable: "--font-encode-sans-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const outfit = Saira_Condensed({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export const metadata: Metadata = {
  title: "Daniele La Ciura - Product Leader",
  description:
    "Hello, I’m Daniele. I design and build elegant, timeless digital experiences. Welcome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${encodeSansCondensed.variable} ${outfit.variable} antialiased`}
      >
        <AmplitudeProvider />
        {children}
      </body>
    </html>
  );
}
