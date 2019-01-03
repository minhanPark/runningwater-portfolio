import React from "react";
import WaterImage from "components/WaterImage";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.text}>Not Found</h2>
      <WaterImage />
    </div>
  );
};

export default NotFound;
