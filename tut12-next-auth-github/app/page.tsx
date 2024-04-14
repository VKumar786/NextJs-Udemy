"use client";

import { signIn, useSession } from "next-auth/react";
import React from "react";
import { signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session ? (
        <div>
          <p>
            Welcome Back
            {JSON.stringify(session, null, 2)}
          </p>
          <button onClick={() => signOut({ callbackUrl: "/" })}>
            Sign out
          </button>
        </div>
      ) : (
        <div>
          <h1>Not signed in</h1>
          <button onClick={() => signIn("github")}>Sign in</button>
        </div>
      )}
    </div>
  );
};

export default Home;
