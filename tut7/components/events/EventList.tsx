import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/event-item.module.css";
import listStyles from "@/styles/event-list.module.css";
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRight from "../icons/arrow-right";

const EventList = (props: {
  data: {
    id: string;
    title: string;
    description: string;
    location: string;
    date: string;
    image: StaticImageData;
    isFeatured: boolean;
  }[];
}) => {
  const { data } = props;
  return (
    <ul className={listStyles.list}>
      {data.map((item, index) => {
        const { title, description, location, date, image, isFeatured, id } =
          item;
        return (
          <div key={Math.random() + index + title + id} className={styles.item}>
            <Image src={image} alt="" />
            <div className={styles.content}>
              <div className={styles.summary}>
                <h2>{title}</h2>
                <div className={styles.date}>
                  <DateIcon />
                  <time>
                    {new Date(date)
                      .toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                      .toString()}
                  </time>
                </div>
                <div className={styles.address}>
                  <AddressIcon />
                  <address>{location.replace(", ", "\n")}</address>
                </div>
              </div>
              <div className={styles.actions}>
                <Button href={`/events/${id}`}>
                  <span>Explore Event</span>
                  <span className={styles.icon}>
                    <ArrowRight />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
};

export default EventList;
