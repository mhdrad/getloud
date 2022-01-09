import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const posts = trpc.useQuery(["post.all"]);

  return (
    <main className="max-w-screen-xl mx-auto mt-2">
      <h1 className="text-3xl font-bold">Recent Articles</h1>

      {posts.isLoading ?? <div>Loading...</div>}

      {posts.data?.map((item) => (
        <article key={item.id} className="mt-5">
          <h1 className="text-4xl tracking-tight font-extrabold">
            {item.title}
          </h1>
          <p className="mt-3 text-gray-600 text-sm">
            Posted by: {item.user.name}
          </p>
          <p className="mt-3 text-base">{item.description}</p>
        </article>
      ))}
    </main>
  );
};

export default Home;
