import type { FC } from "react";
import Article from "./Article";

type Props = {
  posts: {
    id: number;
    title: string;
    createdAt: string;
    type: string;
    slug: string;
    categories: {
      title: string;
      slug: string;
      color: string;
    }[];
  }[];
};

const PostList: FC<Props> = ({ posts }) => {
  return (
    <div
      className="
        grid grid-cols-2 gap-[1px]
        mx-auto max-w-sm
      bg-gray-dark border
        md:max-w-full md:grid-cols-4
      "
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
