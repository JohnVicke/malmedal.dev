import { SideNavigation } from "@/components/navigation/side-navigation";
import { MobileNavigation } from "@/components/navigation/mobile-navigation";
import { clsx } from "clsx";
import "./globals.css";
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
      <body className="relative mx-4 mt-4 flex max-w-screen-md antialiased md:mt-28 lg:mx-auto">
        <SideNavigation className="hidden md:block" />
        <MobileNavigation className="block md:hidden" />
        <main className="flex min-w-0 flex-auto flex-col gap-4 px-2 pb-12 md:mt-0 md:px-0">{children}</main>
      </body>
    </html>
  );
}
