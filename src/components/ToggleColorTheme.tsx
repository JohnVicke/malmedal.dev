import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import React from "react";

import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";

const getLocalTheme = () =>
  localStorage.getItem("darkMode") === "true" ? "dark" : "light";

const setLocalTheme = (dark: boolean) => {
  localStorage.setItem("darkMode", dark ? "false" : "true");
  const html = document.querySelector("html");
  if (html) html.className = dark ? "light" : "dark";
};

const ToggleThemeComponent = ({
  onClick,
  theme,
  tooltip,
}: {
  theme: string;
  onClick: () => void;
  tooltip: string;
}) => {
  const anim: AnimationProps = {
    initial: {
      rotateX: "0deg",
    },
    animate: {
      rotateY: "180deg",
    },
    transition: {
      type: "spring",
    },
  };

  return (
    <AnimatePresence>
      {theme === "dark" ? (
        <motion.button {...anim} key="sun-icon" onClick={onClick}>
          <div className="sr-only">{`toggle-${tooltip}`}</div>
          <SunIcon color="dark:fill-yellow-200" />
        </motion.button>
      ) : (
        <motion.button {...anim} key="moon-icon" onClick={onClick}>
          <div className="sr-only">{`toggle-${tooltip}`}</div>
          <MoonIcon color="fill-blue-950" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export const ToggleColorTheme = () => {
  const [theme, setTheme] = React.useState(getLocalTheme());
  const tooltip = theme === "dark" ? "Light" : "Dark";

  const handleClick = () => {
    const localTheme = getLocalTheme();
    setLocalTheme(localTheme === "dark");
    setTheme(localTheme === "dark" ? "light" : "dark");
  };

  return (
    <ToggleThemeComponent
      theme={theme}
      onClick={handleClick}
      tooltip={tooltip}
    />
  );
};
