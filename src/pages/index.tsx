import type { PageWithLayout } from "@/types/next";

import { trpc } from "@/utils/trpc";
import DefaultLayout from "@/components/layout/DefaultLayout";
import PostList from "@/components/post/PostList";
import Avatar from "@/components/profile/Avatar";
import Hero from "@/components/profile/Hero";
import Categories from "@/components/Categories";

const Home: PageWithLayout = () => {
  // const posts = trpc.useQuery(["post.all"]);

  const post = {
    id: 1,
    title: "Breaking to a new row with flexbox",
    createdAt: "August,3",
    type: "ARTICLE",
    slug: "article",
    categories: [
      {
        title: "CSS",
        slug: "css",
        color: "orange",
      },
    ],
  };

  const posts = [post, post, post, post, post, post, post, post];

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
      <div className="flex">
        <div className="w-80 h-80">
          <Avatar imageUrl="/avatar.png" title="Marius Vidal" />
        </div>
        <div className="flex-1 pl-20">
          <Hero title="Marius Vidal" subtitle="Front-end developer" />
        </div>
        <div className="w-24">
          <Categories
            homeTitle="All posts"
            items={categories}
            currentSlug=""
            lightMode={false}
          />
        </div>
      </div>

      <div className="py-20">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

Home.Layout = DefaultLayout;

export default Home;
