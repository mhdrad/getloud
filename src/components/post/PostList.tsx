import { PostData } from "@/types/component";
import { FC } from "react";
import Article from "./Article";

const PostList: FC = () => {
  const post: PostData = {
    id: 1,
    title: "Breaking to a new row with flexbox",
    createdAt: "August,3",
    type: "ARTICLE",
    url: "/article/braking-to-a-new-row-with-flexbox",
    categories: [
      {
        title: "CSS",
        slug: "css",
        color: "#5499d7",
      },
    ],
  };

  const posts: PostData[] = [post, post, post, post, post, post, post, post];

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
          <Article {...post} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
