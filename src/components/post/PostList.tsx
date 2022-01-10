import { FC } from "react";

const PostList: FC = () => {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-sm md:max-w-full md:grid-cols-4 gap-[1px] bg-gray-dark border ">
      {[1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6].map(
        (i) => (
          <div
            key={i}
            className="
              bg-black
              xl:h-80
              lg:h-64
              md:h-48
              md:w-full
              h-48
              hover:animate-post-scale-in
            "
          >
            hello
          </div>
        )
      )}
    </div>
  );
};

export default PostList;
