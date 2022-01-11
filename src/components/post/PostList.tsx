import { FC } from "react";
import Article from "./Article";

const PostList: FC = () => {
  const post = {
    id: 1,
    title: "Breaking to a new row with flexbox",
    createdAt: "August,3",
    type: "ARTICLE",
    url: "/article/braking-to-a-new-row-with-flexbox",
    categories: [
      {
        title: "CSS",
        slug: "css",
        color: "orange",
      },
    ],
  };

  const posts = [post, post, post, post, post, post, post, post];

  return (
    <div
      className="
      grid grid-cols-2 gap-[1px]
      mx-auto max-w-sm
    bg-gray-dark border
      md:max-w-full md:grid-cols-4"
    >
      {posts.map((i) => (
        <div
          key={i.id}
          className="
              bg-black
              h-48
              md:w-full
              md:h-48
              lg:h-64
              xl:h-80
              md:hover:animate-post-scale-in
            "
        >
          <Article {...i} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
