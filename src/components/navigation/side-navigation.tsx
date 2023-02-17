"use client";

import { usePathname } from "next/navigation";

import clsx from "clsx";
import { CustomLink } from "../custom-link";
import { GithubIcon, LinkedInIcon, MailIcon, VimaIcon } from "../icons";
import { navigationItems } from "./nav-items";

export const SideNavigation = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  return (
    <aside className={clsx("sticky mr-12 min-w-[150px] border-r border-[#251E35]", className)}>
      <nav className="flex flex-col ">
        <div className="mb-4 pl-2">
          <VimaIcon />
        </div>
        {navigationItems.map(({ href, title }) => {
          const isActive = pathname === href;
          return (
            <CustomLink
              href={href}
              key={href}
              className={clsx(
                "block w-fit rounded-md p-2 font-serif opacity-70 hover:bg-neutral-200 dark:hover:bg-neutral-800",
                isActive && "font-bold opacity-100",
              )}
            >
              {title}
            </CustomLink>
          );
        })}
        <div className="mt-4 flex gap-4 pl-2">
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
      </nav>
    </aside>
  );
};
