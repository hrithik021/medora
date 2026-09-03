import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medora1 | Accessible Premium Care in the UAE",
  description:
    "Secondary-care hospitals built for the UAE's insured middle-income population. Powered by Medora1 OS in partnership with Apollo Hospitals, Dubai Investment Park.",
  keywords: [
    "Medora1",
    "Apollo Hospitals UAE",
    "Dubai Investment Park Hospital",
    "Secondary Care Dubai",
    "Medora1 OS",
    "Healthcare UAE",
    "Dr. Raza Siddiqui",
    "Bidhann Chaudary",
    "Abhinav Sharma",
  ],
  authors: [{ name: "Medora1 Healthcare" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};


export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030712",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-gray-950 text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
