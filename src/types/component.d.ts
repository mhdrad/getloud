import type { FC } from "react";

declare type PostListComponent = FC<PostComponent[]>;

declare type AvatarComponent = FC<{
  title: string;
  imageUrl: string;
}>;

declare type HeroComponent = FC<{
  title: string;
  subtitle: string;
}>;

declare type CategoriesComponent = FC<{
  homeTitle: string;
  items: {
    title: string;
    slug: string;
  }[];
  currentSlug: ?string;
  lightMode: ?boolean;
}>;
