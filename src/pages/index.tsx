import type { PageWithLayout } from "@/types/next";

import { trpc } from "@/utils/trpc";
import DefaultLayout from "@/components/layout/DefaultLayout";
import PostList from "@/components/post/PostList";
import Avatar from "@/components/profile/Avatar";
import Hero from "@/components/profile/Hero";
import Categories from "@/components/Categories";

const Home: PageWithLayout = () => {
  // const posts = trpc.useQuery(["post.all"]);

  const categories = [
    {
      title: "HTML",
      slug: "html",
    },
    {
      title: "CSS",
      slug: "css",
    },
    {
      title: "JavaScript",
      slug: "javascript",
    },
    {
      title: "Node.js",
      slug: "nodejs",
    },
  ];

  return (
    <div className="pt-20">
      {/* <h1 className="text-3xl font-bold">Recent Articles</h1>

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
      ))} */}

      <div className="flex">
        <div className="w-80 h-80">
          <Avatar imageUrl="/avatar.png" title="Marius Vidal" />
        </div>
        <div className="flex-1 pl-20">
          <Hero title="Marius Vidal" subtitle="Front-end developer" />
        </div>
        <div className="w-24">
          <Categories homeTitle="All posts" items={categories} currentSlug="" />
        </div>
      </div>

      <div className="py-20">
        <PostList />
      </div>
    </div>
  );
};

Home.Layout = DefaultLayout;

export default Home;
