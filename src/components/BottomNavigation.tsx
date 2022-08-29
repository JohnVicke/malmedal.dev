import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { v4 } from "uuid";
import { GithubIcon } from "../icons/GithubIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { MailIcon } from "../icons/MailIcon";
import { RocketIcon } from "../icons/RocketIcon";
import type { BaseIconProps } from "../icons/Icon";

const Divider = () => <div className="w-[2px] h-12 bg-neutral-600" />;

type Item = {
  id: string;
  type: "route" | "divider" | "social";
  name?: string;
  href?: string;
  target?: string;
  icon: ({ tooltip, isActive }: BaseIconProps) => JSX.Element;
};

const items: Item[] = [
  {
    id: v4(),
    type: "route",
    name: "Home",
    href: "/",
    icon: HomeIcon,
  },
  {
    id: v4(),
    type: "route",
    name: "Projects",
    href: "/projects",
    icon: RocketIcon,
  },
  {
    id: v4(),
    type: "divider",
    icon: Divider,
  },
  {
    id: v4(),
    type: "route",
    name: "Mail",
    icon: MailIcon,
    href: "mailto:viktormalmedal@gmail.com",
  },
  {
    id: v4(),
    type: "social",
    name: "Github",
    target: "_blank",
    href: "https://www.github.com/JohnVicke/",
    icon: GithubIcon,
  },
  {
    id: v4(),
    type: "social",
    name: "LinkedIn",
    target: "_blank",
    href: "https://www.linkedin.com/in/viktor-malmedal/",
    icon: LinkedInIcon,
  },
];

export const BottomNavigation = ({
  activeRoute,
  url,
}: {
  activeRoute: string;
  url: string;
}) => {
  let initial = false;

  if (typeof window !== "undefined") {
    initial = document.referrer.includes(url);
  }

  const animation = {
    initial: {
      bottom: -100,
      opacity: 0,
    },
    animate: {
      bottom: 10,
      opacity: 1,
    },
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 90,
    },
  };

  return (
    <AnimatePresence initial={!initial}>
      <motion.div
        {...animation}
        className="bg-neutral-800 backdrop-blur-md rounded-3xl max-w-[90%] md:max-w-md w-fit fixed translate-x-[-50%] left-[50%]"
      >
        <div className="m-2 rounded-2xl md:rounded-none p-2 flex gap-4 justify-start items-center overflow-x-scroll sm:overflow-visible">
          {items.map(({ type, icon: Icon, id, href, target, name }: Item) =>
            type === "divider" ? (
              <Divider key={id} />
            ) : (
              <a href={href} target={target} key={id} aria-label={name}>
                <Icon
                  initial={!initial}
                  tooltip={name ?? ""}
                  isActive={href === activeRoute}
                />
              </a>
            )
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
