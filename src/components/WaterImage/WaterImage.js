import React from "react";
import styles from "./WaterImage.module.scss";
import { profile_tp } from "images/profile";

const WaterImage = () => {
  return <img src={profile_tp} className={styles.img} alt="WaterImage" />;
};

export default WaterImage;
