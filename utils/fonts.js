import { Quicksand } from "next/font/google";

const quicksand_init = Quicksand({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
});

export const quicksand = quicksand_init;
