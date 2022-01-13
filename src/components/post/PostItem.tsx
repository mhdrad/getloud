import type { FC } from "react";

const PostItem: FC = ({ children }) => {
  return (
    <div
      className="
        bg-black
        h-48
        md:w-full
        md:h-48
        lg:h-64
        xl:h-80
      "
    >
      {children}
    </div>
  );
};

export default PostItem;
