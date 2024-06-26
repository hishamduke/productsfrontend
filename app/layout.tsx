import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product listing",
  description: "A product showcasing app made using nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div
          className={cn(
            "min-h-screen bg-background font-sans antialiased container",
            inter.className
          )}
        >
          <main className="flex min-h-screen flex-col  justify-between">
            <Header />
            <div className="flex-1 pt-32  ">{children}</div>
            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
