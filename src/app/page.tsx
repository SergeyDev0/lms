'use client'
import React, { ReactElement } from "react";
import styles from "./page.module.scss";
import Loader from "@/components/loader/Loader";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";

const HomePage = (): ReactElement => {
	const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
	const [isWrapperVisible, setIsWrapperVisible] = React.useState<boolean>(false);
	const [isContentVisible, setIsContentVisible] = React.useState<boolean>(false);

	React.useEffect(() => {
		const loadingTimer = setTimeout(() => {
			setIsLoaded(true);
		}, 2000);

		return () => clearTimeout(loadingTimer);
	}, []);

	React.useEffect(() => {
		if (isLoaded) {
			const wrapperTimer = setTimeout(() => {
				setIsWrapperVisible(true);
			}, 800);

			const contentTimer = setTimeout(() => {
				setIsContentVisible(true);
			}, 1000);

			return () => {
				clearTimeout(wrapperTimer);
				clearTimeout(contentTimer);
			};
		}
	}, [isLoaded]);
  
  
  
  // if (!mounted) return;
  
  return (
    <>
      <Loader isLoaded={isLoaded} />
    	<div className={styles.indent}>
    		<div className={isLoaded ? `${styles.page} ${styles.isLoaded}` : styles.page}>
					<div className={`${styles.wrapper} ${isWrapperVisible ? styles.isVisible : ''}`}>
						<div className={`${styles.content} ${isContentVisible ? styles.isVisible : ''}`}>
							<Sidebar />
							<main className={styles.main}>
								<Header />
							</main>
						</div>
					</div>
		    </div>
    	</div>
    </>
  );
};

export default HomePage; 
