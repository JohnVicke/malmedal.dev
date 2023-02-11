"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import clsx from "clsx";

const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Tools",
    href: "/tools",
  },
  {
    title: "Guestbook",
    href: "/guestbook",
  },
];

export const SideNavigation = () => {
  const pathname = usePathname();
  return (
    <aside className="sticky min-w-[200px]">
      <nav className="flex flex-col gap-2">
        {navigationItems.map(({ href, title }) => {
          const isActive = pathname === href;
          return (
            <Link
              href={href}
              key={href}
              className={clsx(
                "block w-fit rounded-md p-2 font-serif text-sm font-normal opacity-70 hover:bg-neutral-200 dark:hover:bg-neutral-800",
                isActive && "bg-neutral-200 font-bold opacity-100 dark:bg-neutral-800",
              )}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};
