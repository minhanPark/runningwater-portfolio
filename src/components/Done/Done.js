import React from "react";
import Item from "components/Item";
import styles from "./Done.module.scss";

const Done = ({ totalLists, value, setInput, viewList, filterLists }) => {
  const handleChange = e => {
    const { value } = e.target;
    setInput(value);
    const lists = totalLists.filter(list =>
      list.tags
        .join(" ")
        .toLowerCase()
        .includes(value)
    );
    filterLists(lists);
  };

  const ViewLists =
    value.length === 0
      ? totalLists.map((item, index) => (
          <Item
            imgSrc={item.imgSrc}
            header={item.header}
            tags={item.tags}
            link={item.link}
            key={index}
          />
        ))
      : viewList.map((item, index) => (
          <Item
            imgSrc={item.imgSrc}
            header={item.header}
            tags={item.tags}
            link={item.link}
            key={index}
          />
        ));

  return (
    <div>
      <div className={styles.search}>
        <div className={styles.bottomLine}>
          <span className={styles.hashTag}>#</span>
          <input
            type="text"
            className={styles.input}
            placeholder="Write a tag"
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.wrapper}>{ViewLists}</div>
    </div>
  );
};

export default Done;
