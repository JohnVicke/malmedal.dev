import { GithubIcon, LinkedInIcon, MailIcon, VimaIcon } from "@/components/icons";
import Image from "next/image";

export default async function HomePage() {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-4">
            <VimaIcon />
            <h1 className="relative font-serif text-4xl font-semibold">Viktor Malmedal</h1>
          </div>
          <p>abuot me </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image className="rounded-full" src="/images/viktor.jpg" alt="profile image" width={100} height={100} />
          <div className="flex gap-4">
            <GithubIcon />
            <LinkedInIcon />
            <MailIcon />
          </div>
        </div>
      </div>
      <button className="inline-flex items-center gap-2 text-sm">
        <GithubIcon />
        <span className="opacity-80 hover:opacity-100">View source</span>
      </button>
    </>
  );
}
