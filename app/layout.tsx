import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "MyEstore",
  description: "E-commerce demo built with Next.js and Stripe checkout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow relative">
          {/* 固定位置的装饰线 - 基于1536px宽度 (2xl) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-[768px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-70 z-10"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-1 translate-x-[768px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 opacity-70 z-10"></div>

          {/* 内容容器 */}
          <div className="container mx-auto px-4 py-8 relative">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
