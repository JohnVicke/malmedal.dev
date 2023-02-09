import { GithubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import Image from "next/image";

export default async function HomePage() {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="relative text-4xl">Viktor Malmedal</h1>
      <div className="flex flex-col items-center gap-2">
        <Image className="rounded-full" src="/images/viktor.jpg" alt="profile image" width={100} height={100} />
        <div className="flex gap-2">
          <GithubIcon />
          <LinkedInIcon />
          <MailIcon />
        </div>
      </div>
    </div>
  );
}
