'use client'
import React, { ReactElement } from "react";
import Link from "next/link";
import { AlignJustify, Home, MessageCircle, Settings, UsersRound } from "lucide-react";
import styles from './Sidebar.module.scss';

const Sidebar = (): ReactElement => {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("");
  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={rootRef}
      className={`${isOpenSidebar ? `${styles.sidebar} ${styles.open}` : styles.sidebar}`}
    >
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="" onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
              <AlignJustify />
              <span>Меню</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/"
              className={activeTab === "social" ? styles.active : ""}
              onClick={() => setActiveTab("social")}
            >
              <Home />
              <span>Главная</span>
            </Link>	
          </li>
          <li className={styles.navItem}>
            <Link
              href="/chat"
              className={activeTab === "chat" ? styles.active : ""}
              onClick={() => setActiveTab("chat")}
            >
              <MessageCircle />
              <span>Чаты</span>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href="/users"
              className={activeTab === "users" ? styles.active : ""}
              onClick={() => setActiveTab("users")}
            >
              <UsersRound />
              <span>Пользователи</span>
            </Link>
          </li>
        </ul>
      </nav>

      <Link
        href="/settings"
        className={styles.hide + (activeTab === "settings" ? ` ${styles.active}` : "")}
        onClick={() => setActiveTab("settings")}
      >
        <Settings />
        <span>Настройки</span>
      </Link>
    </div>
  );
};

export default Sidebar;
