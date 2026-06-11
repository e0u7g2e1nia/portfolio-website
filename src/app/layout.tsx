import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LightboxProvider } from "@/components/ui/Lightbox";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "吴沂铮 Eugenia Wu",
  description: "复旦大学 · 社会学 · 产品与设计作品集",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={playfair.variable}>
      <body>
        <LightboxProvider>
          <CustomCursor />
          <Navigation />
          {children}
          <Footer />
        </LightboxProvider>
      </body>
    </html>
  );
}
