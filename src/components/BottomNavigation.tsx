import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { v4 } from "uuid";
import { GithubIcon } from "../icons/GithubIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { MailIcon } from "../icons/MailIcon";
import { RocketIcon } from "../icons/RocketIcon";
import { ToggleColorTheme } from "./ToggleColorTheme";

const Divider = () => (
  <div className="w-[2px] h-12 bg-neutral-400 dark:bg-neutral-600" />
);

const pages = [
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
];

const socials = [
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

export const BottomNavigation = ({ activeRoute }: { activeRoute: string }) => {
  const [initial, setInitial] = React.useState(false);
  const [isServer, setIsServer] = React.useState(true);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setInitial(document.referrer.includes("localhost"));
      setIsServer(false);
    }
  }, []);

  const animation = {
    initial: {
      bottom: -100,
      opacity: 0,
    },
    animate: {
      bottom: 10,
      opacity: 1,
    },
    exit: {
      bottom: -50,
      opacit: 0,
    },
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 90,
    },
  };

  if (isServer) return null;

  return (
    <AnimatePresence>
      <motion.div
        {...animation}
        className="backdrop-blur-md rounded-3xl max-w-[90%] sm:max-w-md w-fit fixed translate-x-[-50%] left-[50%]"
      >
        <div className="m-2 rounded-2xl md:rounded-none p-2 flex gap-4 justify-start items-center overflow-x-scroll sm:overflow-visible">
          {pages.map(({ href, id, icon: Icon, name }) => (
            <a href={href} key={id} aria-label={name}>
              <Icon
                initial={!initial}
                tooltip={name}
                isActive={href === activeRoute}
              />
            </a>
          ))}
          <div className="hidden sm:block">
            <Divider />
          </div>
          {socials.map(({ href, id, icon: Icon, name }) => (
            <a href={href} target="_blank" key={id} aria-label={name}>
              <Icon
                initial={!initial}
                tooltip={name ?? ""}
                isActive={href === activeRoute}
              />
            </a>
          ))}
          <ToggleColorTheme />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
