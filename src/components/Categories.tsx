import type { CategoriesComponent } from "@/types/component";
import Image from "next/image";
import Link from "next/link";

const Categories: CategoriesComponent = ({ homeTitle, items, currentSlug }) => {
  const links = [
    {
      title: homeTitle,
      slug: "",
    },
    ...items,
  ];

  return (
    <>
      {links.map((i) => (
        <Link key={i.slug} href={`/category/${i.slug}`}>
          <a className="block mb-4 group">
            <span
              className={[
                "group-hover:bg-white group-hover:text-black",
                currentSlug == i.slug && "bg-white text-black px-[1px]",
              ].join(" ")}
            >
              {i.title}
            </span>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Categories;
