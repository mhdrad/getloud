import type { PageWithLayout } from "@/types/next";

import { trpc } from "@/utils/trpc";

import ArticleLayout from "@/components/layout/ArticleLayout";

import backIcon from "@/styles/assets/back.svg";

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
    <div className="p-10 pt-0">
      <div className="h-10 relative">
        <a
          href="#"
          className="text-gray-dark h-10 px-4 flex items-center absolute left-1/2 opacity-40 transition-opacity hover:text-white hover:opacity-80"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 inline-block mr-[12px]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </a>
      </div>
      <div className="bg-white text-black pt-10">
        <div className="container mx-auto">
          <div className="flex">
            <div className="flex-1">
              <div>
                <span className="text-orange">CSS</span>
                <span className="ml-4">August,3</span>
              </div>
              <h1 className="text-6xl leading-snug mr-56 mt-4">
                Breaking to a new row with flexbox
              </h1>
              <div className="ml-40 mr-80 my-14">
                Here is the challenge: if you want to create a flexbox layout
                with several rows of items, layout that looks something like
                this, with three stacked items and alternating full-width items.
              </div>
            </div>

            <div className="w-24">
              <Categories
                lightMode
                homeTitle="All posts"
                items={categories}
                currentSlug={null}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.Layout = ArticleLayout;

export default Home;
