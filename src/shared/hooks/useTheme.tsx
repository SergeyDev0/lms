"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useState, useEffect } from "react";

type Theme = 'light' | 'dark' | 'system';

export const useTheme = () => {
  const { theme, setTheme, resolvedTheme, systemTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // Принудительно переключаем между light и dark
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  const setThemeMode = (newTheme: Theme) => {
    setTheme(newTheme);
  };

  const isDark = resolvedTheme === 'dark';
  const isLight = resolvedTheme === 'light';
  const isSystem = theme === 'system';

  return {
    theme: mounted ? (resolvedTheme || 'light') : 'light',
    systemTheme: systemTheme || 'light',
    toggleTheme,
    setThemeMode,
    isDark,
    isLight,
    isSystem,
    mounted
  };
};
