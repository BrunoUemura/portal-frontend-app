import type { NextPage } from "next";
import Head from "next/head";
import Router from "next/router";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Home: NextPage = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      Router.push("/dashboard");
    } else {
      Router.push("/login");
    }
  }, []);

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>My Portal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;