import { navigationItems } from "./main-nav-items";
import { Navigation } from "@/components/navigation";

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body className="relative mx-4 mt-4 flex max-w-screen-lg antialiased md:mt-28 lg:mx-auto">
        <Navigation navigation={navigationItems} />
        <main className="flex min-w-0 flex-auto flex-col gap-4 px-2 pb-12 md:mt-0 md:px-0">{children}</main>
      </body>
    </>
  );
}
