import React from "react";
import styles from "./MeetupItem.module.css";
import Card from "../ui/Card";

const MeetupItem = (props) => {
  const { id, image, title, address, description } = props;
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
