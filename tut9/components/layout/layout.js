import { Fragment } from "react";

import MainHeader from "./main-header";
import { useNotification } from "../../context/NotificationContext";
import Notification from "../notification";

function Layout(props) {
  const { notification } = useNotification();
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
      {notification && <Notification {...notification} />}
    </Fragment>
  );
}

export default Layout;
