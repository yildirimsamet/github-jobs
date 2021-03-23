import styles from "./Loading.module.css";
import React from "react";
import Loading from "react-loading-components";
const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loaderWrapper}>
        <Loading
          className={styles.loader}
          type="spinning_circles"
          width={75}
          height={75}
          fill="var(--light-blue)"
        />
      </div>
    </div>
  );
};
export default Loader;
