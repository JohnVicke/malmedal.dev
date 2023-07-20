import { cn } from "@/utils/cn";
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
  return (
    <>
      {theme !== "dark" ? (
        <button
          className="group rounded-md bg-foreground/20 p-1 hover:bg-foreground/30"
          key="sun-icon"
          onClick={onClick}
        >
          <div className="sr-only">{`toggle-${tooltip}`}</div>
          <SunIcon className="fill-foreground transition-colors group-hover:fill-yellow-200" />
        </button>
      ) : (
        <button
          key="moon-icon"
          onClick={onClick}
          className="group rounded-md bg-foreground/10 p-1 transition-colors hover:bg-foreground/5"
        >
          <div className="sr-only">{`toggle-${tooltip}`}</div>
          <MoonIcon className="fill-foreground transition-colors group-hover:fill-blue-900" />
        </button>
      )}
    </>
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
