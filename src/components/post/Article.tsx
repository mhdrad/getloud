import type { FC, MouseEventHandler } from "react";

import { memo } from "react";
import { motion as Motion } from "framer-motion";

import ArticleModal from "@/components/ArticleModal";

type Props = {
  post: {
    id: number;
    title: string;
    slug: string;
    categories: {
      title: string;
      slug: string;
      color: string;
    }[];
    createdAt: string;
  };

  onClick: MouseEventHandler;
  isSelected: boolean;
};

const Article: FC<Props> = ({ post, onClick, isSelected }) => {
  const { id, categories, title, slug, createdAt } = post;

  return (
    <>
      <Motion.a
        onClick={onClick}
        href={`/${slug}`}
        layout={true}
        className={[
          isSelected
            ? "fixed top-10 left-10 bottom-0 right-10 z-10 bg-white"
            : "flex w-full h-full flex-col py-[18px] px-6 bg-black md:hover:animate-post-scale-in",
        ].join(" ")}
      >
        {!isSelected ? (
          <>
            <p className="lg:absolute">
              {categories.map((c, index) => (
                <span
                  key={index}
                  className={["leading-6", `color-[${c.color}]`].join(" ")}
                >
                  {c.title}
                </span>
              ))}
            </p>
            <p
              className="
                leading-6 pt-1 text-gray-dark
                lg:absolute lg:mt-5
              "
            >
              {createdAt}
            </p>

            <div className="flex flex-1 items-center text-center">
              <h2 className="text-lg lg:text-xl xl:text-2xl">{title}</h2>
            </div>
          </>
        ) : (
          <ArticleModal
            post={post}
            content="<p>lorem ipsum</p>"
            categories={[]}
          />
        )}
      </Motion.a>
    </>
  );
};

export default memo(
  Article,
  (prev, next) => prev.isSelected === next.isSelected
);
