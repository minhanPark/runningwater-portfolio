import React from "react";
import styles from "./Channel.module.scss";
import Item from "components/Item";

const Channel = ({ channels }) => {
  const items = channels.map((item, index) => {
    return (
      <Item
        imgSrc={item.imgSrc}
        header={item.header}
        tags={item.tags}
        link={item.link}
        key={index}
      />
    );
  });
  return (
    <div>
      <div className={styles.wrapper}>{items}</div>
    </div>
  );
};

export default Channel;
