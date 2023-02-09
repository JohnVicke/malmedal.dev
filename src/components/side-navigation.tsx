"use-client";

import Link from "next/link";

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
    href: "/guest-book",
  },
];

export const SideNavigation = () => {
  return (
    <aside className="sticky min-w-[200px]">
      <nav className="flex flex-col gap-2">
        {navigationItems.map(({ href, title }) => (
          <Link
            href={href}
            key={href}
            className="block w-fit rounded-md p-2 text-sm font-semibold hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            {title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};
