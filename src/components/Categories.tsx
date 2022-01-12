import type { CategoriesComponent } from "@/types/component";
import Link from "next/link";

const Categories: CategoriesComponent = ({
  homeTitle,
  items,
  lightMode,
  currentSlug,
}) => {
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
              className={
                lightMode
                  ? [
                      "group-hover:bg-black group-hover:text-white",
                      currentSlug === i.slug && "bg-black text-white px-[1px]",
                    ].join(" ")
                  : [
                      "group-hover:bg-white group-hover:text-black",
                      currentSlug === i.slug && "bg-white text-black px-[1px]",
                    ].join(" ")
              }
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
