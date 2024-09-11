import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/toggle-button";
import { Navbar } from "@/components/Navbar";
import { ThemeButton } from "@/components/Theme-button";
import { BackgroundBeams } from "@/components/ui/background-beams";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      
      >
        <ThemeButton/>
        
        <Navbar/>
        <ThemeProvider
        attribute="class"
        defaultTheme="system" enableSystem disableTransitionOnChange> 
      
        
        {children}
        <BackgroundBeams/></ThemeProvider>
       
      </body>
    </html>
  );
}
