import type { FC } from "react";

const PostList: FC = ({ children }) => {
  return (
    <div
      className="
        grid grid-cols-2 gap-[1px]
        mx-auto max-w-sm
      bg-gray-dark border
        md:max-w-full md:grid-cols-4
      "
    >
      {children}
    </div>
  );
};

export default PostList;
