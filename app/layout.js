import localFont from "next/font/local";
import "./globals.css";
import Navigations from "@/components/navigations/Navigations";
import Footer from "@/components/footer/Footer";
import { quicksand } from "@/utils/fonts";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "UrbanHaven",
  description:
    "UrbanHaven, all the peaceful and comfortable living spaces you seek.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased`}>{children}</body>
    </html>
  );
}
