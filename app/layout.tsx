import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Aurora from "@/components/Aurora/Aurora";
import SplashCursor from "@/components/SplashCursor/SplashCursor";
import BottomDock from "@/components/ui/BottomDock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webbly AI - Modern UI Components",
  description: "Experience the future of web development with stunning modern UI components powered by React, Framer Motion, and cutting-edge design.",
  keywords: "UI components, React, Framer Motion, modern design, animations, web development",
  authors: [{ name: "Webbly AI Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark bg-black" style={{ backgroundColor: '#000000' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white overflow-x-hidden bg-black`}
        style={{ backgroundColor: '#000000' }}
      >
        {/* Aurora Background - Full screen overlay */}
        <div className="fixed inset-0 w-screen h-screen z-0">
          <Aurora
            colorStops={["#7c3aed", "#22C55E", "#7c3aed"]}
            blend={0.5}
            amplitude={1}
            speed={0.5}
          />
        </div>
        
        {/* Subtle dark overlay for better content readability */}
        <div className="fixed inset-0 bg-black/10 z-5 pointer-events-none" />
        
        {/* Splash Cursor Effect */}
        <SplashCursor />
        
        {/* Bottom Navigation Dock */}
        <BottomDock />
        
        {/* Main Content */}
        <div className="relative z-20 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
