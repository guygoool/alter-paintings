import type { Metadata } from "next";
import { Inter, Crimson_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const crimsonPro = Crimson_Pro({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Paintings of Alter Metzger",
  description: "A digital gallery showcasing the artwork of Holocaust survivor and artist Alter Metzger - 50 paintings that document survival, memory, and hope.",
  keywords: ["art", "Holocaust survivor", "Alter Metzger", "paintings", "gallery", "memorial"],
  authors: [{ name: "Alter Metzger Gallery" }],
  openGraph: {
    title: "The Paintings of Alter Metzger",
    description: "A digital gallery showcasing the artwork of Holocaust survivor and artist Alter Metzger",
    type: "website",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${crimsonPro.variable} antialiased bg-gallery-50 text-artist-brown font-body`}
      >
        {children}
      </body>
    </html>
  );
}
