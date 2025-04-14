// app/layout.js
import "./globals.css";
import Loader from "@/components/Loader"; // Ensure correct import path for Loader
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The World Saver",
  description: "Making the world better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Loader />
        {children}
      </body>
    </html>
  );
}
