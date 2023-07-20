import React from "react";
import { Icons } from "@/components/Icons";

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
          className="rounded-md bg-foreground/20 p-1 text-foreground/70 hover:bg-foreground/30 hover:text-foreground"
          key="sun-icon"
          onClick={onClick}
        >
          <div className="sr-only">{`toggle-${tooltip}`}</div>
          <Icons.sun />
        </button>
      ) : (
        <button
          key="moon-icon"
          onClick={onClick}
          className="rounded-md bg-foreground/10 p-1 text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
        >
          <div className="sr-only">{`toggle-${tooltip}`}</div>
          <Icons.moon />
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
