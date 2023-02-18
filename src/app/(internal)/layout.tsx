export const metadata = {
  title: {
    default: "Internal",
    template: "%s",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <body className="relative mx-4 mt-8 flex max-w-screen-xl antialiased">
        <main className="flex min-w-0 flex-auto flex-col gap-4 px-2 pb-12 md:mt-0 md:px-0">{children}</main>
      </body>
    </>
  );
}
