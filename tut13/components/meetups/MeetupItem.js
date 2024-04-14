import Image from "next/image";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import Link from "next/link";

function MeetupItem(props) {
  const { item, _image, content, actions } = classes;
  const { id, image, title, address } = props;
  return (
    <Link href={`/${id}`}>
      <li className={item}>
        <Card>
          <div className={image}>
            <Image
              src={image}
              alt={title}
              layout="responsive"
              width={1000}
              height={700}
            />
          </div>
          <div className={content}>
            <h3>{title}</h3>
            <address>{address}</address>
          </div>
          <div className={actions}>
            <button>Show Details</button>
          </div>
        </Card>
      </li>
    </Link>
  );
}

export default MeetupItem;
