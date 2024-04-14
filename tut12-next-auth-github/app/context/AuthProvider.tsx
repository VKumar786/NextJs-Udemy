"use client";

import { SessionContext } from "next-auth/react";
import { ReactNode } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionContext>{children}</SessionContext>;
};

export default AuthProvider;

import React from "react";
