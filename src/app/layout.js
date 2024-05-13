import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./Providers";
import Footer from '@/components/Footer';
import Breadcrumb from "@/components/Breadcrumb";

const myFont = localFont({ src: '../components/fonts/ClashDisplay-Variable.ttf' });

export const metadata = {
  title: "Ad Nouveau",
  description: "Ad Nouveau",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={`${myFont.className} min-h-[calc(100vh-10rem)] transition-all duration-500 bg-white dark:bg-black`}>
          <Breadcrumb />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
