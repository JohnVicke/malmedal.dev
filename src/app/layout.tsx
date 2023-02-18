import "./globals.css";
import { clsx } from "clsx";
import { Lora, Lato } from "@next/font/google";

const lora = Lora({
  weight: ["400", "700"],
  variable: "--font-lora",
  display: "swap",
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Viktor Malmedal",
    template: "%s | Viktor Malmedal",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        "min-h-screen bg-neutral-100 text-black",
        "dark:bg-gradient-to-t dark:from-[#06040F] dark:to-[#14121B] dark:text-white",
        lora.variable,
        lato.variable,
      )}
    >
      {children}
    </html>
  );
}
