"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CustomLink } from "../custom-link";
import { GithubIcon, LinkedInIcon, MailIcon } from "../icons";
import { navigationItems } from "./nav-items";

export const MobileNavigation = ({ className }: { className?: string }) => {
  const [open, setOpen] = React.useState(false);
  const toggleSideNav = () => setOpen(!open);

  const pathname = usePathname();
  return (
    <div className={className}>
      <button onClick={toggleSideNav} className="fixed bottom-8 left-8 flex gap-2 rounded-lg bg-neutral-800 p-2">
        Menu
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </button>
      {open && (
        <div className="fixed bottom-0 left-0 flex flex-wrap bg-[#14121B] px-4 pb-12">
          {navigationItems.map(({ href, title }) => {
            const isActive = pathname === href;
            return (
              <Link
                href={href}
                key={href}
                className={clsx(
                  "block w-fit rounded-md p-4 font-serif font-normal opacity-70 hover:bg-neutral-200 dark:hover:bg-neutral-800",
                  isActive && "font-bold opacity-100",
                )}
              >
                {title}
              </Link>
            );
          })}
          <div className="mt-4 flex gap-6 pl-2">
            <CustomLink href="https://github.com/johnvicke">
              <GithubIcon />
            </CustomLink>
            <CustomLink href="https://www.linkedin.com/in/viktor-malmedal/">
              <LinkedInIcon />
            </CustomLink>
            <CustomLink href="mailto:viktor@malmedal.dev">
              <MailIcon />
            </CustomLink>
          </div>
        </div>
      )}
    </div>
  );
};
