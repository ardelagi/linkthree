import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Avo Rahmadani - Web Developer",
  description: "Membangun website modern, mengelola server VPS, dan berbagi konten kreatif tentang teknologi dan otomasi.",
  keywords: ["Web Developer", "Discord Developer", "VPS", "Technology", "Content Creator"],
  authors: [{ name: "Avo Rahmadani" }],
  creator: "Avo Rahmadani",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ardelagi.web.id",
    title: "Avo Rahmadani - Web Developer",
    description: "Membangun website modern, mengelola server VPS, dan berbagi konten kreatif tentang teknologi dan otomasi.",
    siteName: "Avo Rahmadani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avo Rahmadani - Web Developer",
    description: "Membangun website modern, mengelola server VPS, dan berbagi konten kreatif tentang teknologi dan otomasi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}