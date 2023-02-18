import { CustomLink } from "@/components/custom-link";
import { Heading } from "@/components/heading";
import { GithubIcon } from "@/components/icons";
import { LastVisitText } from "@/components/last-visit-text";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="flex justify-between">
        <div className="relative flex flex-col gap-6">
          <LastVisitText />
          <div className="flex items-center gap-4">
            <Heading topDecoration={<TopHeadingDecoration />} bottomDecoration={<BottomHeadingDecoration />}>
              Viktor Malmedal
            </Heading>
          </div>
          <p>
            Hi 👋, I&apos;m Viktor Malmedal, currently full stack engineer at Cygni specializing in web and mobile
            development.
          </p>
        </div>
      </div>
      <Image className="rounded-lg" src="/images/viktor.jpg" alt="profile image" width={100} height={100} />
      <CustomLink
        className="group inline-flex items-center gap-2 text-sm"
        href="https://github.com/johnvicke/malmedal.dev"
      >
        <GithubIcon />
        <span className="opacity-70  group-hover:opacity-100">View source</span>
      </CustomLink>
    </>
  );
}

const TopHeadingDecoration = () => (
  <span className="absolute -bottom-1 left-2">
    <svg width="81" height="4" viewBox="0 0 81 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 0.5C1.17158 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17158 3.5 2 3.5V0.5ZM81 0.5L80.0125 0.5V3.5H81V0.5ZM76.0625 0.5L70.1375 0.5V3.5L76.0625 3.5V0.5ZM62.2375 0.5L60.2625 0.5V3.5L62.2375 3.5V0.5ZM56.3125 0.5L50.3875 0.5V3.5L56.3125 3.5V0.5ZM42.4875 0.5L40.5125 0.5V3.5L42.4875 3.5V0.5ZM36.5625 0.5L30.6375 0.5V3.5L36.5625 3.5V0.5ZM22.7375 0.5L20.7625 0.5V3.5H22.7375V0.5ZM16.8125 0.5L10.8875 0.5V3.5L16.8125 3.5V0.5ZM2.9875 0.5L2 0.5V3.5H2.9875V0.5Z"
        fill="white"
      />
    </svg>
  </span>
);

const BottomHeadingDecoration = () => (
  <span className="absolute top-1 right-14">
    <svg width="43" height="2" viewBox="0 0 43 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 0L0 0V2H1V0ZM43 0L41.95 0V2H43V0ZM37.75 0L31.45 0V2L37.75 2V0ZM23.05 0L20.95 0V2H23.05V0ZM16.75 0L10.45 0V2L16.75 2V0ZM2.05 0L1 0V2H2.05V0Z"
        fill="white"
      />
    </svg>
  </span>
);
