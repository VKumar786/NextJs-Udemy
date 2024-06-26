import Head from "next/head";

import Layout from "../components/layout/layout";
import "../styles/globals.css";
import Notification from "../components/notification";
import AppContext from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppContext>
      <Layout>
        <Head>
          <title>Next Events</title>
          <meta name="description" content="NextJS Events" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AppContext>
  );
}

export default MyApp;
