import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs Tutorial",
  description: "Build awesome stuff with nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-base-200">
        <Navbar />
        <main className="px-8 py-20 max-w-6xl mx-auto ">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
