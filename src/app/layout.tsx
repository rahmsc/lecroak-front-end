import type { Metadata } from "next";
import "./globals.css";
import { Condiment } from "next/font/google";

const condiment = Condiment({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Croak",
  description: "i am an artist, ribbét.",
  icons: {
    icon: "/assets/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${condiment.className}`}>{children}</body>
    </html>
  );
}
