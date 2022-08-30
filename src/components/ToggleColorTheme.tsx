import React from "react";
import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { GodComponent, BaseIconProps } from "../icons/Icon";

const getLocalTheme = () =>
  localStorage.getItem("darkMode") === "true" ? "dark" : "light";

const setLocalTheme = (dark: boolean) => {
  localStorage.setItem("darkMode", dark ? "false" : "true");
  const html = document.querySelector("html");
  if (html) html.className = dark ? "light" : "dark";
};

const ToggleThemeComponent = ({ theme }: { theme: string }) => {
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
        <motion.div {...anim} key="sun-icon">
          <SunIcon color="fill-neutral-500 dark:fill-neutral-300" />
        </motion.div>
      ) : (
        <motion.div {...anim} key="moon-icon">
          <MoonIcon color="fill-neutral-500 dark:fill-neutral-300" />
        </motion.div>
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
    <GodComponent
      onClick={handleClick}
      isActive={false}
      initial={true}
      tooltip={tooltip}
      component={<ToggleThemeComponent theme={theme} />}
    />
  );
};
