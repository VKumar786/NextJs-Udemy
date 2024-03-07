import React from "react";
import styles from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  const { meetups } = props;
  return (
    <div className={styles.list}>
      {meetups.map((meetup) => {
        return <MeetupItem key={meetup.id} {...meetup} />;
      })}
    </div>
  );
};

export default MeetupList;
