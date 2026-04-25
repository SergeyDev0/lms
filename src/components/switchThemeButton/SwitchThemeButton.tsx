"use client";
import React from "react";
import { useTheme } from "@/shared/hooks/useTheme";
import styles from "./SwitchThemeButton.module.scss";

export default function SwitchThemeButton() {
  const { theme, toggleTheme, mounted } = useTheme();

  const handleClick = () => {
    toggleTheme();

    setTimeout(() => {
      document.documentElement.setAttribute(
        "data-theme",
        theme === "light" ? "dark" : "light"
      );
    }, 100);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      toggleTheme();

      setTimeout(() => {
        document.documentElement.setAttribute(
          "data-theme",
          theme === "light" ? "dark" : "light"
        );
      }, 100);
    }
  };

  if (!mounted) return <></>;

  return (
    <button
      type="button"
      className={[styles.toggle, theme === "dark" ? styles.on : styles.off].join(" ")}
      aria-label="Toggle theme"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <span className={styles.iconSun} aria-hidden>
        <svg viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="4.25" />
          <g>
            <line x1="12" y1="1.5" x2="12" y2="5.1" />
            <line x1="12" y1="18.9" x2="12" y2="22.5" />
            <line x1="1.5" y1="12" x2="5.1" y2="12" />
            <line x1="18.9" y1="12" x2="22.5" y2="12" />
            <line x1="4.0" y1="4.0" x2="6.55" y2="6.55" />
            <line x1="17.45" y1="17.45" x2="20.0" y2="20.0" />
            <line x1="17.45" y1="6.55" x2="20.0" y2="4.0" />
            <line x1="4.0" y1="20.0" x2="6.55" y2="17.45" />
          </g>
        </svg>
      </span>

      <span className={styles.iconMoon} aria-hidden>
				<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path d="M16.8 14.9a7.2 7.2 0 1 1-7.7-11 a8.7 8.7 0 1 0 7.7 11z" />
					<path d="M13.5 2.5 l1.1 3.0 3.0 1.1-3.0 1.1-1.1 3.0-1.1-3.0-3.0-1.1 3.0-1.1 1.1-3.0z" />
					<path d="M17.5 8.0 l0.7 2.0 2.0 0.7-2.0 0.7-0.7 2.0-0.7-2.0-2.0-0.7 2.0-0.7 0.7-2.0z" />
				</svg>
      </span>

      <span className={styles.knob} />
    </button>
  );
}
