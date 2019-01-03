import React from "react";
import styles from "./Item.module.scss";

const Item = ({ imgSrc, header, tags, link }) => {
  const divStyle = {
    backgroundImage: "url(" + imgSrc + ")"
  };

  const tag = `#${tags.slice(0, 3).join(" #")} ...`;

  return (
    <div className={styles.listWrapper}>
      <a
        href={link}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer"
        style={divStyle}
      >
        <div className={styles.texts}>
          <h4 className={styles.tagText}>{tag}</h4>
          <h1 className={styles.headerText}>{header}</h1>
        </div>
      </a>
    </div>
  );
};

export default Item;
