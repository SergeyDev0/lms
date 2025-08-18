"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { CircleArrowRight, Info, LoaderCircle } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { useTheme } from "@/shared/hooks/useTheme";
import styles from "./page.module.scss";
import { useRouter } from "next/navigation";

const Login = (): React.ReactElement => {
  const { theme, mounted } = useTheme();
	const router = useRouter();
  const [isExpanding, setIsExpanding] = useState(false);
  const [isContentHidden, setIsContentHidden] = useState(false);
	const modalRef = useRef<HTMLDivElement>(null);
  
  if (!mounted) return <></>;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsContentHidden(true);

    setTimeout(() => {
      setIsExpanding(true);
    }, 350);
  };

	const handleAnimationEnd = (e: React.AnimationEvent<HTMLDivElement>) => {
		if (e.target !== e.currentTarget) return;
		if (e.animationName?.includes('postChangeBorder')) {
			router.replace('/');
		}
	};
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalWrapper}>
				<div
					ref={modalRef}
					style={{ height: modalRef.current ? modalRef.current.clientHeight : 'auto' }}
					className={`${styles.modal} ${isExpanding ? styles.expanded : ''}`}
					onAnimationEnd={handleAnimationEnd}
				>
	        <div className={`${styles.login} ${isExpanding ? styles.expanded : ''}`}>
	          <div className={`${styles.content} ${isContentHidden ? styles.hidden : ''}`}>
	            <Image
	              className={styles.logo}
	              src={theme === "light" ? "/logo-c.svg" : "/logo-cc.svg"}
	              alt="logo"
	              width={350}
	              height={100}
	            />
	            <form className={styles.form} onSubmit={handleSubmit}>
	              <input type="text" placeholder="Введите логин или email" />
	              <input type="password" placeholder="Введите пароль" />
	              <button type="submit" className={styles.authButton}>
	                Войти
	              </button>
	              <div
	                className={styles.forgotPassword}
	                data-tooltip-id="forgot-password"
	                data-tooltip-place="right-start"
	                data-tooltip-content="Для восстановления пароля или регистрации, обратитесь к администратору"
	                data-tooltip-variant={theme === 'light' ? 'dark' : 'light'}
	              >
	                Забыли пароль или нет аккаунта? <Info />
	                <Tooltip
	                  id="forgot-password"
	                  style={{
	                    width: 320,
	                    lineHeight: 1.2,
	                    zIndex: 2,
	                  }}
	                />
	              </div>
	            </form>
	            <div className={styles.or}>
	              <span>или</span>
	            </div>
	            <div className={styles.socials}>
	              <button type="button">
	                <Image src="/google.svg" alt="google" width={20} height={20} /> Google
	              </button>
	              <button type="button">
	                <Image src="/vk.svg" alt="vk" width={20} height={20} /> VK ID
	              </button>
	            </div>
	          </div>
	        </div>
	      </div>
      </div>
    </div>
  );
};

export default Login;
