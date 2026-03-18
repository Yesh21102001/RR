import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rrbros.in"),

  title: {
    default:
      "RR Bros's Multi Shopping Mall | Mens Wear, Womens Wear, Kids Wear & Jewellery",
    template: "%s | RR Bros Multi Shopping Mall",
  },

  description:
    "RR Bros's Multi Shopping Mall is a complete family shopping destination specializing in Pelli Dandalu. Shop Mens Wear, Womens Wear, Kids Wear, Jewellery and Sandals. Founded by Raja Reddy.",

  keywords: [
    "RR Bros",
    "RR Bros Multi Shopping Mall",
    "Pelli Dandalu",
    "Mens Wear",
    "Womens Wear",
    "Kids Wear",
    "Jewellery Shop",
    "Sandals Store",
    "Wedding Garlands",
    "Shopping Mall",
  ],

  authors: [{ name: "Raja Reddy" }],
  creator: "RR Bros",
  publisher: "RR Bros",

  alternates: {
    canonical: "https://rrbros.in",
  },

  openGraph: {
    title: "RR Bros's Multi Shopping Mall",
    description:
      "Shop Mens Wear, Womens Wear, Kids Wear, Jewellery and Sandals at RR Bros's Multi Shopping Mall. Special in Pelli Dandalu.",
    url: "https://rrbros.in",
    siteName: "RR Bros Multi Shopping Mall",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RR Bros Multi Shopping Mall",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "RR Bros's Multi Shopping Mall",
    description:
      "Shop Mens Wear, Womens Wear, Kids Wear, Jewellery and Sandals at RR Bros Multi Shopping Mall.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}