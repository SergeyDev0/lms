import React, { ReactElement, useEffect, useState } from "react";
import styles from "./Loader.module.scss";
import { LoaderCircle } from "lucide-react";

const Loader = ({ isLoaded }: { isLoaded: boolean }): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isLoaded ? `${styles.loader} ${styles.isLoaded}` : styles.loader }>
      <div className={`${styles.wrapper} ${isVisible ? styles.visible : styles.hidden}`}>
      	<h1 className={styles.welcome}>Здравствуйте, Сергей!</h1>
	      <p>Секундочку, готовим всё к работе... </p>
	      <LoaderCircle strokeWidth={1.2} />
      </div>
    </div>
  );
};

export default Loader;
