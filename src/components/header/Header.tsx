import React, { ReactElement } from "react";
import { useTheme } from "@/shared/hooks/useTheme";
import Image from "next/image";
import styles from "./Header.module.scss";

const UserIcon = (): ReactElement => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 1C18.075 1 23 5.925 23 12s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1z" stroke="#2B2638" strokeWidth="1.5"/>
    <path className={styles.fill} d="M6 17.5c1.1-1.6 2.9-2.6 4.9-2.6h2.4c2.1 0 3.8 1 4.9 2.6C16.7 19.2 14.5 20.2 12.1 20.2c-2.4 0-4.6-1-6.1-2.7z" fill="#2B2638"/>
    <path className={styles.fill} d="M12.1 6c2.1 0 3.6 1.5 3.6 3.6s-1.5 3.6-3.6 3.6-3.6-1.5-3.6-3.6S10 6 12.1 6z" fill="#2B2638"/>
  </svg>
);

const Header = (): ReactElement => {
	const { theme, toggleTheme, setThemeMode, mounted } = useTheme();

	if(!mounted) return <></>;
	
	const handleThemeToggle = () => {
		toggleTheme();
		
		setTimeout(() => {
			document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
		}, 100);
	};
	
	return (
		<header className={styles.header}>
			<button className={styles.profile} onClick={handleThemeToggle}>
				<UserIcon />
				<div className={styles.col}>
					<h3>Вячеслав</h3>
					<p>ИП-223</p>
				</div>
			</button>
		</header>
	)
};


export default Header;
