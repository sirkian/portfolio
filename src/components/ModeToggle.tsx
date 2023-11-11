"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "./ui/switch";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return <Switch onClick={toggleTheme} />;
}
