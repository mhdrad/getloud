import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

import { rehype } from "rehype";
import rehypeHighlight from "rehype-highlight";

const convertToHtml = async (markdown: string) => {
  // convert markdown to html
  const html = (
    await unified().use(remarkParse).use(remarkHtml).process(markdown)
  ).toString();

  // highlight codes in html
  const result = (
    await rehype()
      .data("settings", { fragment: true })
      .use(rehypeHighlight)
      .process(html)
  ).toString();

  return result;
};

export { convertToHtml };
