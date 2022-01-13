import type { Page } from "@/types/next";

import { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";

import DefaultLayout from "@/components/layout/DefaultLayout";
import Avatar from "@/components/profile/Avatar";
import Hero from "@/components/profile/Hero";
import Categories from "@/components/Categories";

import PostList from "@/components/post/PostList";
import PostItem from "@/components/post/PostItem";
import Article from "@/components/post/Article";

import BackButton from "@/components/common/BackButton";

const Home: Page = () => {
  // const posts = trpc.useQuery(["post.all"]);

  const postData = {
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

  const posts = [
    { ...postData, id: 1 },
    { ...postData, id: 2 },
    { ...postData, id: 3 },
    { ...postData, id: 4 },
    { ...postData, id: 5 },
    { ...postData, id: 6 },
    { ...postData, id: 7 },
    { ...postData, id: 8 },
  ];

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

  const [selectedArticle, setSelectedArticle] = useState(null);
  const onArticleClick = (post: typeof postData) => {
    setSelectedArticle(post.id);

    // silence change browser href to article
    window.history.replaceState({}, "", "/article");
  };

  const onBackButtonClick = () => {
    setSelectedArticle(null);

    // silence change browser href to home
    window.history.replaceState({}, "", "/");
  };

  return (
    <>
      <AnimatePresence>
        {selectedArticle && (
          <Motion.div
            className="fixed bg-black z-10 h-10 right-10 left-10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <BackButton
              onClick={(e) => {
                e.preventDefault();
                onBackButtonClick();
              }}
            />
          </Motion.div>
        )}
      </AnimatePresence>
      <div className="container mx-auto">
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
        </div>
        <div className="py-20">
          <PostList>
            <>
              {posts.map((post) => (
                <PostItem key={post.id}>
                  <Article
                    post={post}
                    onClick={(e) => {
                      e.preventDefault();
                      onArticleClick(post);
                    }}
                    isSelected={selectedArticle === post.id}
                  />
                </PostItem>
              ))}
            </>
          </PostList>
        </div>
      </div>
    </>
  );
};

Home.Layout = DefaultLayout;

export default Home;
