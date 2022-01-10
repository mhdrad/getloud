import type { FC } from "react";

declare type PostData = {
  id: number;
  title: string;
  url: string;
  categories: ?PostCategory[];
  type: "ARTICLE" | "LINK";
  createdAt: "August,3";
};

declare type PostComponent = FC<PostData>;

declare type PostCategory = {
  title: string;
  slug: string;
  color: string;
};
