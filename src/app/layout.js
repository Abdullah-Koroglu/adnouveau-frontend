import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Providers";
import Footer from '@/components/Footer';
import Breadcrumb from "@/components/Breadcrumb";
import { ThemeProvider } from 'next-themes';

const myFont = localFont({ src: '../components/fonts/ClashDisplay-Variable.ttf' });

export const metadata = {
  title: "Ad Nouveau",
  description: "Ad Nouveau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${myFont.className} min-h-[calc(100vh-10rem)] transition-all duration-500 bg-white dark:bg-black`}>
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem>
          <Breadcrumb />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
