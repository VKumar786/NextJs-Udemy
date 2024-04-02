import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <Link href={"/blog/19-12-2002/this-is-something-special"}>
        Birthday Blog
      </Link>
      <br />
      <Link href={"/project"} replace>
        Project
      </Link>
    </div>
  );
};

export default Home;
