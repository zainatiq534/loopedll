import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Zain Atiq | Web Developer & Shopify Expert",
  description:
    "Building fast, modern & high-converting websites that help businesses grow online and stand out.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${montserrat.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
