import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const users = trpc.useQuery(["user.all"]);

  if (!users.data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.data.map((item) => (
        <p key={item.id}>
          {item.name}: {item.email}
        </p>
      ))}
    </div>
  );
};

export default Home;
