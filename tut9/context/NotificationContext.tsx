"use client";

import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext({});

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider = (props: { children: any }) => {
  const { children } = props;
  const [notification, setNotification] = useState(null);

  const showNotification = (_notification: {
    title: string;
    message: string;
    status: string;
  }) => {
    const { title, message, status } = _notification;
    setNotification({
      title,
      message,
      status,
    });
  };
  const hideNotification = () => setNotification(null);

  return (
    <NotificationContext.Provider
      value={{ notification, showNotification, hideNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
