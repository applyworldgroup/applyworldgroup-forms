import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Ubuntu } from 'next/font/google'
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/providers/theme-provider";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400","300","500","700"] });

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
  title: "Apply World Forms",
  description: "Apply world froms for customer enquiry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} ${geistMono} ${geistSans} antialiased w-full items-center flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="max-w-7xl">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
