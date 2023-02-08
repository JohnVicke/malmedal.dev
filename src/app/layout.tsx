import { BottomNavigation } from "@/components/bottom-navigation";
import "./globals.css";

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
    <html lang="en" className="bg-neutral-100 text-black dark:bg-[#121018] dark:text-white">
      <head />
      <body className="relative mx-4 flex h-screen max-w-screen-lg flex-row antialiased md:flex-col lg:mx-auto">
        <main className="flex min-w-0 flex-auto flex-col px-2 pt-24 md:mt-0 md:px-0">{children}</main>
        <BottomNavigation />
      </body>
    </html>
  );
}
