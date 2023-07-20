import React from "react";
import { Icons } from "@/components/Icons";

const setLocalTheme = (theme: "dark" | "light") => {
  localStorage.setItem("theme", theme);
  const html = document.querySelector("html");
  if (html) html.className = theme;
};

const ToggleThemeComponent = ({ onClick }: { onClick: () => void }) => {
  return (
    <>
      <button
        key="moon-icon"
        onClick={onClick}
        className="relative rounded-md bg-foreground/5 p-1 text-foreground/70 transition-colors hover:bg-foreground/5 hover:text-foreground"
      >
        <div className="sr-only">Toogle Theme</div>
        <Icons.moon className="dark:hidden" />
        <Icons.sun className="hidden dark:block" />
      </button>
    </>
  );
};

const getLocalTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    return null;
  }
  if (theme !== "light" && theme !== "dark") {
    return null;
  }
  return theme as "light" | "dark";
};

export const ToggleColorTheme = () => {
  const handleClick = () => {
    const theme = getLocalTheme();
    const newTheme = theme === "dark" ? "light" : "dark";
    setLocalTheme(newTheme);
  };

  return <ToggleThemeComponent onClick={handleClick} />;
};
