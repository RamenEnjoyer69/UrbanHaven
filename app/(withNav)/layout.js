import localFont from "next/font/local";
import Navigations from "@/components/navigations/Navigations";
import Footer from "@/components/footer/Footer";
import { quicksand } from "@/utils/fonts";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({ children }) {
  return (
    <main lang="en">
      <Navigations />
      {children}
      <Toaster />
      <Footer />
    </main>
  );
}
