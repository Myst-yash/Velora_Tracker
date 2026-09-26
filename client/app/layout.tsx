import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Velora — Every story, beautifully organized",
    template: "%s | Velora",
  },
  description:
    "A beautiful home for tracking the movies, shows, games, books, and stories you love.",
  applicationName: "Velora",
  keywords: [
    "entertainment tracker",
    "movie tracker",
    "TV show tracker",
    "game tracker",
    "book tracker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} h-full bg-slate-950 antialiased`}
    >
      <body className="flex min-h-full flex-col bg-slate-950 text-slate-50">
        {children}
      </body>
    </html>
  );
}
