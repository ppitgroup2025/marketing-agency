import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apex Agency | Strategy-Led Digital Excellence",
  description: "Strategy-led websites & marketing that connect, convert, & grow. Turning browsers into buyers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-inter: 'Inter', sans-serif;
            --font-outfit: 'Outfit', sans-serif;
          }
        `}</style>
      </head>
      <body className="antialiased bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
