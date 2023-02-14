import { Heading } from "@/components/heading";

export default function GuestbookLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Heading>Guestbook</Heading>
      {children}
    </>
  );
}
