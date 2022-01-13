import type { FC } from "react";

import Categories from "@/components/Categories";
import ShareButtons from "@/components/common/ShareButtons";
import Typography from "@/components/common/Typography";

type Props = {
  post: any;
  content: string;
  categories: {
    title: string;
    slug: string;
  }[];
};

const ArticlePage: FC<Props> = ({ post, content, categories }) => {
  return (
    <div className="p-10 pt-0">
      <div className="bg-white text-black relative pt-10">
        <ShareButtons />
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
                <Typography content={content} />
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
export default ArticlePage;
