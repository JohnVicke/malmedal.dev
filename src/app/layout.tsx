import { SideNavigation } from "@/components/side-navigation";
import { clsx } from "clsx";
import "./globals.css";
import { Lora, Lato } from "@next/font/google";

const lora = Lora({
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  /*verification: {
    google: '',
    yandex: '',
  }*/
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
      <head />
      <body className="relative mx-4 mt-28 flex max-w-screen-md antialiased lg:mx-auto">
        <SideNavigation />
        <main className="flex min-w-0 flex-auto flex-col px-2 md:mt-0 md:px-0">{children}</main>
      </body>
    </html>
  );
}
