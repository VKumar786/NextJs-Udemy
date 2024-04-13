import React from "react";
import { NotificationProvider } from "./NotificationContext";

const AppContext = (props: { children: any }) => {
  const { children } = props;
  return <NotificationProvider>{children}</NotificationProvider>;
};

export default AppContext;
