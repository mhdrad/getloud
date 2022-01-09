import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const users = trpc.useQuery(["user.all"]);

  return (
    <main className="max-w-screen-xl mx-auto mt-2">
      <h1 className="text-3xl font-bold">List of users</h1>

      {users.isLoading ?? <div>Loading...</div>}

      {!!users.data &&
        users.data.map((item) => (
          <p key={item.id}>
            {item.name}: {item.email}
          </p>
        ))}
    </main>
  );
};

export default Home;
