import type { FC } from "react";
import Link from "next/link";

type Props = {
  id: number;
  title: string;
  slug: string;
  categories: {
    title: string;
    slug: string;
    color: string;
  }[];
  type: string;
  createdAt: string;
};

const Article: FC<Props> = ({ categories, title, slug, createdAt }) => {
  return (
    <Link href={`/${slug}`}>
      <a className="flex w-full h-full flex-col py-[18px] px-6">
        <p className="lg:absolute">
          {categories.map((c, index) => (
            <span key={index} className="leading-6" style={{ color: c.color }}>
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
      </a>
    </Link>
  );
};

export default Article;
